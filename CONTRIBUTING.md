# Contributing

Thanks for contributing to `react-native-ui`.

## Quick Checklist
- Use Node.js >= 18 and `pnpm` (workspace uses `pnpm@9`).
- Run `pnpm install` once at the repo root.
- Keep changes scoped and add/update docs/tests when relevant.

## Repo Layout
- `packages/core`: Library source and build output.
- `example`: Example app used for manual testing.

## Setup
1. Install dependencies at the repo root:
   - `pnpm install`
2. (Optional) Run the example app:
   - `pnpm --filter example start`

## Common Scripts (Repo Root)
- `pnpm run build`: Build all packages via Turborepo.
- `pnpm run dev`: Run package dev tasks via Turborepo.
- `pnpm run test`: Run tests via Turborepo (if configured per package).
- `pnpm run lint`: Lint `example` and `packages`.
- `pnpm run format`: Format the repo with Prettier.
- `pnpm run clean`: Clean build outputs via Turborepo.

## Package Scripts
- `packages/core`:
  - `pnpm --filter @rn-ui/core run build`

## Code Style
- ESLint is configured in `eslint.config.js`.
- Prettier config lives in `.prettierrc`.
- Please run `pnpm run lint` and `pnpm run format` before submitting.

## Making Changes
1. Create a focused branch.
2. Make changes in `packages/` and/or `example/` as needed.
3. Update or add documentation when behavior changes.
4. Verify locally:
   - `pnpm run lint`
   - `pnpm run build`
   - `pnpm --filter example start` (manual check)

## Submitting
- Open a PR with a clear description of the change and any tradeoffs.
- Include screenshots or short notes for UI changes in `example/`.
- Keep commits small and intentional.
