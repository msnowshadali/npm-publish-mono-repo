#!/bin/bash

# Development script for the monorepo

echo "🚀 NPM Publish Monorepo - Development Script"
echo "=============================================="

case "$1" in
  "build")
    echo "📦 Building all packages..."
    npm run build
    ;;
  "clean")
    echo "🧹 Cleaning all packages..."
    npm run clean
    ;;
  "type-check")
    echo "🔍 Type checking all packages..."
    npm run type-check
    ;;
  "test")
    echo "🧪 Running tests..."
    npm run test
    ;;
  "install")
    echo "📥 Installing dependencies..."
    npm install
    ;;
  "ui")
    echo "🎨 Working with UI package..."
    cd packages/ui
    case "$2" in
      "build")
        npm run build
        ;;
      "clean")
        npm run clean
        ;;
      "type-check")
        npm run type-check
        ;;
      *)
        echo "Available UI commands: build, clean, type-check"
        ;;
    esac
    cd ../..
    ;;
  "utils")
    echo "🛠️  Working with Utils package..."
    cd packages/utils
    case "$2" in
      "build")
        npm run build
        ;;
      "clean")
        npm run clean
        ;;
      "type-check")
        npm run type-check
        ;;
      *)
        echo "Available Utils commands: build, clean, type-check"
        ;;
    esac
    cd ../..
    ;;
  "release")
    echo "🚀 Releasing packages..."
    echo "Make sure you have:"
    echo "1. NPM_TOKEN set in environment"
    echo "2. Conventional commits pushed to main branch"
    echo "3. GitHub token configured"
    echo ""
    read -p "Continue with release? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      npm run release
    else
      echo "Release cancelled."
    fi
    ;;
  *)
    echo "Usage: $0 {command}"
    echo ""
    echo "Available commands:"
    echo "  install     - Install dependencies"
    echo "  build       - Build all packages"
    echo "  clean       - Clean all packages"
    echo "  type-check  - Type check all packages"
    echo "  test        - Run tests"
    echo "  ui {cmd}    - UI package commands (build, clean, type-check)"
    echo "  utils {cmd} - Utils package commands (build, clean, type-check)"
    echo "  release     - Release packages (interactive)"
    echo ""
    echo "Examples:"
    echo "  $0 build"
    echo "  $0 ui build"
    echo "  $0 utils type-check"
    ;;
esac
