# GitHub Actions for Package Releases

This directory contains GitHub Actions workflows for automatically releasing npm packages.

## Workflows

### 1. `release.yml` - Automatic Release on Push
- **Triggers**: When code is pushed to `main` branch
- **Condition**: Only runs if changes are made to `packages/ui/` or `packages/utils/`
- **Behavior**: Automatically releases packages that have changes
- **Best for**: Continuous deployment

### 2. `manual-release.yml` - Manual Release Control
- **Triggers**: Manual workflow dispatch
- **Options**: Choose which package to release (all, ui, utils)
- **Behavior**: Gives you full control over when and what to release
- **Best for**: Controlled releases, testing, emergency fixes

### 3. `release-on-merge.yml` - Release on PR Merge
- **Triggers**: When PRs are merged to `main`
- **Condition**: Only runs if PR contains changes to packages
- **Behavior**: Releases packages after code review and approval
- **Best for**: Team collaboration with code review

## Setup Requirements

### 1. GitHub Secrets
You need to set these secrets in your repository:

```bash
# Go to: Settings > Secrets and variables > Actions
# Add these secrets:

NPM_TOKEN=your_npm_access_token
GITHUB_TOKEN=your_github_token  # Usually auto-generated
```

### 2. NPM Token Setup
```bash
# Login to npm and create access token
npm login
npm token create --read-only

# Or use npm whoami to verify
npm whoami
```

### 3. Repository Permissions
Ensure your repository has these permissions:
- `Contents: Write` - For creating releases and tags
- `Issues: Write` - For creating release notes
- `Pull requests: Write` - For updating PRs
- `ID token: Write` - For authentication

## How It Works

### Automatic Release (release.yml)
1. **Push code** to `main` branch
2. **GitHub Actions detects** changes in package directories
3. **Automatically releases** only the packages with changes
4. **Creates** GitHub release, npm package, and git tags

### Manual Release (manual-release.yml)
1. **Go to Actions tab** in GitHub
2. **Select "Manual Release"** workflow
3. **Choose package** (all, ui, utils)
4. **Click "Run workflow"**
5. **Package gets released** with your chosen options

### PR Merge Release (release-on-merge.yml)
1. **Create PR** with changes to packages
2. **Get code review** and approval
3. **Merge PR** to main
4. **Automatically release** packages with changes

## Benefits

✅ **Smart releases** - Only releases packages with actual changes  
✅ **Individual control** - Release UI or Utils independently  
✅ **Automated workflow** - No manual intervention needed  
✅ **Version management** - Automatic semantic versioning  
✅ **Release notes** - Auto-generated changelogs  
✅ **GitHub integration** - Releases appear in GitHub UI  

## Example Scenarios

### Scenario 1: UI Component Update
```bash
# Make changes to packages/ui/Button.ts
git add packages/ui/Button.ts
git commit -m "feat(ui): add new button variants"
git push origin main
# Result: Only @ms.nowshadali/ui gets released
```

### Scenario 2: Utils Function Addition
```bash
# Make changes to packages/utils/string.ts
git add packages/utils/string.ts
git commit -m "feat(utils): add string validation functions"
git push origin main
# Result: Only @ms.nowshadali/utils gets released
```

### Scenario 3: Both Packages Updated
```bash
# Make changes to both packages
git add packages/ui/ packages/utils/
git commit -m "feat: update both UI and utils packages"
git push origin main
# Result: Both packages get released
```

## Troubleshooting

### Common Issues

1. **Permission denied**: Check repository permissions and secrets
2. **NPM publish failed**: Verify NPM_TOKEN is correct and has publish access
3. **No packages released**: Check if changes are in the right directories
4. **Version conflicts**: Ensure semantic-release can access git history

### Debug Steps

1. **Check Actions tab** for workflow runs and logs
2. **Verify secrets** are properly set
3. **Check package.json** versions and names
4. **Ensure semantic-release** config is correct

## Best Practices

1. **Use conventional commits** for automatic versioning
2. **Test workflows** in a branch first
3. **Monitor releases** to ensure they work as expected
4. **Keep workflows simple** and focused
5. **Use semantic-release** for consistent versioning
