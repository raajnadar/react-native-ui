# react-native-ui

A React Native UI library workspace with an example app and a core package.

## Requirements
- Node.js >= 18
- pnpm (workspace uses `pnpm@9`)

## Quick Start
1. Install dependencies at the repo root:
   - `pnpm install`
2. Run the example app:
   - `pnpm --filter example start`

## Development Workflow
1. Make changes in `packages/core/src`.
2. Build the library:
   - `pnpm run build`
3. Run the example app for manual verification:
   - `pnpm --filter example start`
4. Lint and format before committing:
   - `pnpm run lint`
   - `pnpm run format`

## Common Commands
- `pnpm run build`: Build all packages via Turborepo.
- `pnpm run dev`: Run package dev tasks via Turborepo.
- `pnpm run test`: Run tests via Turborepo (if configured per package).
- `pnpm run lint`: Lint `example` and `packages`.
- `pnpm run format`: Format the repo with Prettier.
- `pnpm run clean`: Clean build outputs via Turborepo.

## Package Commands
- Build only `@react-native-ui/core`:
  - `pnpm --filter @react-native-ui/core run build`

## Workspace Layout
- `packages/core`: Library source and build output.
- `example`: Example app for manual testing.

## Contributing
See `CONTRIBUTING.md` for setup, style, and submission guidance.
