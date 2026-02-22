---
slug: /
sidebar_position: 1
---

# RN UI

Material Design 3 component library for React Native.

## Features

- Follows the [Material Design 3](https://m3.material.io/) specification
- Built-in light and dark theme support
- Full TypeScript support with strict types
- Accessible by default — proper roles, labels, and states
- Tree-shakeable with subpath exports

## Quick Start

```bash
pnpm add @rn-ui/core @rn-ui/components
```

Wrap your app with `MaterialProvider`:

```tsx
import { MaterialProvider } from '@rn-ui/core'

export default function App() {
  return (
    <MaterialProvider>
      {/* Your app */}
    </MaterialProvider>
  )
}
```

Use a component:

```tsx
import { Button } from '@rn-ui/components/button'

<Button variant="filled" onPress={() => {}}>
  Get Started
</Button>
```

## Components

### Layout

| Component | Description |
|-----------|-------------|
| [Box](./components/box) | Theme-aware View with spacing shorthand props |
| [Row](./components/row) | Horizontal layout with wrap and invert support |
| [Column](./components/column) | Vertical layout with invert support |
| [Grid](./components/grid) | Equal-width multi-column grid |
| [Layout](./components/layout) | Safe area wrapper with theme background |

### Inputs

| Component | Description |
|-----------|-------------|
| [Button](./components/button) | Actions and choices with a single tap |
| [IconButton](./components/icon-button) | Icon-only actions |
| [TextField](./components/text-field) | Text input with labels and validation |

### Data Display

| Component | Description |
|-----------|-------------|
| [Card](./components/card) | Contained surfaces for related content |
| [Typography](./components/typography) | MD3 type scale text rendering |

### Surfaces

| Component | Description |
|-----------|-------------|
| [AppBar](./components/appbar) | Top navigation with title and actions |
