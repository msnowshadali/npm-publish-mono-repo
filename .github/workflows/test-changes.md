# Testing Package Change Detection

This guide shows you how to test that the smart release workflow correctly detects package changes.

## Test Scenarios

### Test 1: Only UI Changes
```bash
# Make changes only to UI package
echo "// New UI feature" >> packages/ui/src/components/Button.ts
git add packages/ui/src/components/Button.ts
git commit -m "feat(ui): add new button feature"
git push origin feature/ui-only

# Create PR and merge
# Expected: Only @ms.nowshadali/ui gets released
```

### Test 2: Only Utils Changes
```bash
# Make changes only to Utils package
echo "// New utility function" >> packages/utils/src/string.ts
git add packages/utils/src/string.ts
git commit -m "feat(utils): add string validation"
git push origin feature/utils-only

# Create PR and merge
# Expected: Only @ms.nowshadali/utils gets released
```

### Test 3: Both Packages Changed
```bash
# Make changes to both packages
echo "// UI update" >> packages/ui/src/components/Card.ts
echo "// Utils update" >> packages/utils/src/array.ts
git add packages/ui/src/components/Card.ts packages/utils/src/array.ts
git commit -m "feat: update both UI and utils"
git push origin feature/both-packages

# Create PR and merge
# Expected: Both packages get released
```

### Test 4: No Package Changes
```bash
# Make changes outside package directories
echo "# Documentation update" >> README.md
git add README.md
git commit -m "docs: update README"
git push origin feature/docs-only

# Create PR and merge
# Expected: No packages released
```

## How the Detection Works

The workflow uses `git diff` to compare the PR's base and head commits:

```bash
# This command shows all changed files
git diff --name-only ${{ github.event.pull_request.base.sha }} ${{ github.event.pull_request.head.sha }}

# Example output:
# packages/ui/src/components/Button.ts
# packages/utils/src/string.ts
# README.md

# Then it checks if any files start with:
# - "packages/ui/" → UI package has changes
# - "packages/utils/" → Utils package has changes
```

## Expected Workflow Behavior

| PR Changes | UI Release | Utils Release | Notes |
|------------|------------|---------------|-------|
| `packages/ui/` only | ✅ Yes | ❌ No | Only UI package released |
| `packages/utils/` only | ❌ No | ✅ Yes | Only Utils package released |
| Both packages | ✅ Yes | ✅ Yes | Both packages released |
| No packages | ❌ No | ❌ No | No releases triggered |
| Root files only | ❌ No | ❌ No | No releases triggered |

## Debugging

If releases aren't working as expected:

1. **Check Actions tab** for workflow runs
2. **Look at "Detect package changes" step** output
3. **Verify changed files** are in the right directories
4. **Check package.json** names and versions
5. **Ensure semantic-release** config is correct

## Best Practices

1. **Use conventional commits** for automatic versioning
2. **Keep package changes isolated** in separate PRs when possible
3. **Test with small changes** first
4. **Monitor workflow logs** to understand what's happening
5. **Use descriptive commit messages** to track changes
