# React Native UI

![Node >=18](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)
![pnpm 9](https://img.shields.io/badge/pnpm-9.x-F69220?logo=pnpm&logoColor=white)
![Expo SDK 54](https://img.shields.io/badge/expo-54-000020?logo=expo&logoColor=white)
![Monorepo](https://img.shields.io/badge/monorepo-turbo-EF4444)

Material-inspired React Native UI toolkit built as a `pnpm` + `Turborepo` workspace.

## Preview

**[Live Web Demo](https://raajnadar.github.io/react-native-ui/)** · Scan the QR code with [Expo Go](https://expo.dev/go) to try it on your device:

<p align="center">
  <img src="https://qr.expo.dev/eas-update?projectId=edc0e7f0-1670-40a9-a43c-cbcadafe6587&runtimeVersion=0.0.0&channel=main" alt="Preview QR Code" width="200" />
</p>

> Updated automatically on every push to `main` via [EAS Update](.github/workflows/eas-update.yml) and [GitHub Pages](.github/workflows/deploy-web.yml). Releases are managed by the [Release workflow](.github/workflows/release.yml).

This repository includes:

- `@rn-ui/core`: theme types, themes, and provider primitives.
- `@rn-ui/components`: reusable UI components built on top of core.
- `example`: an Expo Router app used as a live component playground.

## Features

- Theme system with `lightTheme`, `darkTheme`, and `MaterialProvider`.
- Reusable components with typed APIs.
- Expo-based example app for quick manual verification on iOS, Android, and web.
- Workspace-driven local development with package linking.

## Packages

| Package             | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| `@rn-ui/core`       | Theme contracts, theme values, context provider, `useTheme`. |
| `@rn-ui/components` | UI components and subpath exports.                           |
| `example`           | Demo app showing component behavior and API usage.           |

## Repository Layout

```text
.
├─ example/                # Expo Router showcase app
├─ packages/
│  ├─ core/                # Theme + provider primitives
│  └─ components/          # Reusable UI component package
├─ turbo.json
└─ pnpm-workspace.yaml
```

## Requirements

- Node.js `>=18`
- `pnpm@9` (configured in `packageManager`)

## Quick Start

```bash
pnpm install
pnpm run example
```

Run on a specific platform:

```bash
pnpm --filter example ios
pnpm --filter example android
pnpm --filter example web
```

## Usage Example

```tsx
import { MaterialProvider, lightTheme } from '@rn-ui/core'
import { Button, Typography } from '@rn-ui/components'

export function Screen() {
  return (
    <MaterialProvider theme={lightTheme}>
      <Typography variant="headlineSmall">Hello UI</Typography>
      <Button variant="filled">Press me</Button>
    </MaterialProvider>
  )
}
```

## Workspace Commands

| Command               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `pnpm run build`      | Builds all packages with Turborepo.                            |
| `pnpm run dev`        | Runs package `dev` tasks via Turborepo (persistent, uncached). |
| `pnpm run typecheck`  | Type-checks all packages with `tsc --noEmit`.                  |
| `pnpm run lint`       | Lints `example` and `packages`.                                |
| `pnpm run test`       | Runs package `test` tasks if defined.                          |
| `pnpm run format`     | Formats the repository with Prettier.                          |
| `pnpm run clean`      | Cleans build outputs via Turborepo.                            |
| `pnpm run example`    | Starts the Expo example app.                                   |

Package-level build commands:

```bash
pnpm --filter @rn-ui/core build
pnpm --filter @rn-ui/components build
```

## Development Workflow

1. Build context from the existing examples in `example/app`.
2. Implement or update source in `packages/core/src` or `packages/components/src`.
3. Build packages with `pnpm run build`.
4. Validate behavior in the example app.
5. Run `pnpm run lint` and `pnpm run format` before opening a PR.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contribution guide: [`CONTRIBUTING.md`](CONTRIBUTING.md)
