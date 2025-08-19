# NPM Publish Monorepo

This is a sample monorepo demonstrating how to publish multiple TypeScript packages to npm using semantic-release.

## Structure

```
npm-publish-mono-repo/
├── packages/
│   ├── ui/          # UI component library
│   └── utils/       # Utility functions library
├── package.json      # Root workspace configuration
└── README.md
```

## Packages

### @your-org/ui
A sample UI component library with:
- Button component
- Card component  
- Input component
- TypeScript interfaces
- CSS class-based styling

### @your-org/utils
A collection of utility functions including:
- String utilities (capitalize, toCamelCase, etc.)
- Array utilities (unique, shuffle, groupBy, etc.)
- Object utilities (deepClone, pick, omit, etc.)
- Date utilities (formatDate, getRelativeTime, etc.)
- Math utilities (clamp, random, factorial, etc.)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build all packages:**
   ```bash
   npm run build
   ```

3. **Type checking:**
   ```bash
   npm run type-check
   ```

## Publishing

### Prerequisites
- Set up npm authentication: `npm login`
- Configure semantic-release for your npm registry
- Update package names in `packages/*/package.json` to match your npm scope

### Release Process

1. **Make changes and commit with conventional commit messages:**
   ```bash
   git add .
   git commit -m "feat: add new utility function"
   git push origin main
   ```

2. **Release individual packages:**
   ```bash
   cd packages/ui
   npm run release
   
   cd ../utils
   npm run release
   ```

3. **Or release all packages from root:**
   ```bash
   npm run release
   ```

## Conventional Commits

Use these commit message prefixes for automatic versioning:
- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `BREAKING CHANGE:` - Breaking changes (major version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

## Configuration

### Semantic Release
Each package has its own `.releaserc.json` configuration for:
- Commit analysis
- Release notes generation
- Changelog creation
- NPM publishing
- Git tagging
- GitHub releases

### TypeScript
Each package has its own `tsconfig.json` optimized for:
- CommonJS module output
- Declaration file generation
- Strict type checking
- ES2020 target

## Scripts

### Root Level
- `npm run build` - Build all packages
- `npm run test` - Test all packages
- `npm run clean` - Clean all packages
- `npm run lint` - Lint all packages
- `npm run type-check` - Type check all packages
- `npm run release` - Release all packages

### Package Level
- `npm run build` - Build the package
- `npm run clean` - Clean build artifacts
- `npm run type-check` - Type check the package
- `npm run release` - Release the package

## Customization

1. **Update package names** in `packages/*/package.json`
2. **Modify semantic-release config** in `.releaserc.json` files
3. **Add your own components/functions** to the respective packages
4. **Configure CI/CD** for automated releases

## Notes

- Packages use `0.0.0-development` as the initial version
- Semantic-release will automatically version based on commit messages
- Each package can be released independently
- Build artifacts are generated in `dist/` directories
- TypeScript declaration files are automatically generated
