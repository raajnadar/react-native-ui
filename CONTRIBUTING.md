# Contributing to React Native UI

Thanks for contributing. This project is a `pnpm` monorepo with shared packages and an Expo example app, so keeping changes scoped and verifiable is important.

## Development Stack
- Node.js `>=18`
- `pnpm@9`
- Expo SDK `54` (used by `example`)

## Local Setup

```bash
pnpm install
pnpm run example
```

Optional platform runs:

```bash
pnpm --filter example ios
pnpm --filter example android
pnpm --filter example web
```

## Project Structure
- `packages/core`: theme contracts, theme objects, provider, and hooks.
- `packages/components`: reusable UI components and subpath exports.
- `example`: Expo Router app used for manual validation.

## Contribution Guidelines
- Keep each PR focused on a single concern (component behavior, refactor, docs, etc.).
- Preserve public exports unless the change explicitly targets an API update.
- When changing component behavior, update the example screens in `example/app`.
- When changing public APIs, update relevant docs and examples in the same PR.

## Code Quality Standards
- Linting: `eslint.config.js`
- Formatting: `.prettierrc`
- Type safety: package builds generate type declarations and should stay clean.

Run this before opening a PR:

```bash
pnpm run lint
pnpm run build
pnpm run format
```

If your change affects runtime behavior, also validate manually:

```bash
pnpm run example
```

## Useful Commands

| Command | Description |
| --- | --- |
| `pnpm run build` | Build all packages through Turborepo. |
| `pnpm run dev` | Run package `dev` tasks. |
| `pnpm run test` | Run package `test` tasks when available. |
| `pnpm run lint` | Lint `example` and `packages`. |
| `pnpm run format` | Format repository files with Prettier. |
| `pnpm run clean` | Clear build outputs. |
| `pnpm --filter @rn-ui/core build` | Build core package only. |
| `pnpm --filter @rn-ui/components build` | Build components package only. |

## Pull Request Checklist
- [ ] Branch is focused and rebased on latest main branch state.
- [ ] Local commands pass (`lint`, `build`, and formatting applied).
- [ ] Example app behavior is verified for impacted components.
- [ ] Docs were updated for any API or behavior changes.
- [ ] PR description includes scope, rationale, and visual notes for UI changes.

## Commit Guidance
- Prefer clear, imperative commit messages.
- Keep commits small enough to review logically.
- Squash noisy fixup commits before merge when appropriate.

## Reporting Issues
When filing an issue, include:
- Reproduction steps.
- Expected vs actual behavior.
- Device/platform details (iOS, Android, web, simulator/emulator/device).
- Relevant screenshots or logs when applicable.
