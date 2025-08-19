# NPM Publish Monorepo

This is a monorepo containing two separate npm packages:
- `@ms.nowshadali/ui` - UI component library
- `@ms.nowshadali/utils` - Utility functions library

## Structure

```
npm-publish-mono-repo/
├── packages/
│   ├── ui/          # @ms.nowshadali/ui package
│   └── utils/       # @ms.nowshadali/utils package
├── package.json     # Root workspace configuration
├── yarn.lock        # Yarn lock file
└── .github/         # GitHub Actions workflows
```

## Publishing Packages

### Option 1: GitHub Actions (Recommended)
The repository uses GitHub Actions to automatically detect and release packages:

- **Push to main**: Automatically releases packages with changes
- **PR merge**: Releases packages after code review
- **Smart detection**: Only releases packages that actually changed

### Option 2: Manual Release
```bash
# Publish UI package only
yarn release:ui

# Publish Utils package only  
yarn release:utils

# Publish all packages with changes
yarn release
```

## Development Workflow

1. **Make changes** in either `packages/ui` or `packages/utils`
2. **Commit changes** with conventional commit messages:
   ```bash
   git commit -m "feat(ui): add new button component"
   git commit -m "fix(utils): fix string counting function"
   ```
3. **Push and create PR** - GitHub Actions will handle the rest!

## Conventional Commits

Use these commit types for automatic versioning:
- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `BREAKING CHANGE:` - Breaking changes (major version bump)
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` - No version bump

## Package Configuration

Each package has its own:
- `package.json` with unique name and version
- `semantic-release` configuration
- Build and test scripts
- Independent versioning

## Benefits of This Approach

✅ **Separate packages** - Users can install only what they need  
✅ **Independent versioning** - Each package can have different release cycles  
✅ **Shared tooling** - Common build, test, and lint configurations  
✅ **Efficient development** - Work on multiple packages in one repository  
✅ **Smart releases** - GitHub Actions automatically detects and releases changed packages  
✅ **Simple setup** - No complex tooling, just yarn workspaces + semantic-release  

## Example Usage

```bash
# Install only UI components
yarn add @ms.nowshadali/ui

# Install only utilities
yarn add @ms.nowshadali/utils

# Install both
yarn add @ms.nowshadali/ui @ms.nowshadali/utils
```

## GitHub Actions

The repository includes several workflows:
- **Smart Package Release** - Automatically releases packages based on changes
- **Manual Release** - Trigger releases manually when needed
- **Automatic Release** - Release on push to main

All workflows use Yarn for package management and are optimized for the yarn.lock file.

This setup ensures that both packages are published separately and can be used independently by consumers, with GitHub Actions handling the complexity of detecting and releasing only the packages that have changes.
