import { render, screen } from '@testing-library/react-native'
import type { ReactElement, ReactNode } from 'react'
import { MaterialProvider } from '@rn-ui/core'

import { Typography } from '../typography/Typography'

function Providers({ children }: { children: ReactNode }) {
  return <MaterialProvider>{children}</MaterialProvider>
}

function renderWithTheme(ui: ReactElement) {
  return render(ui, { wrapper: Providers })
}

describe('Typography', () => {
  it('renders children text', () => {
    renderWithTheme(<Typography>Hello world</Typography>)
    expect(screen.getByText('Hello world')).toBeTruthy()
  })

  it('assigns header role for heading variants', () => {
    renderWithTheme(<Typography variant="headlineLarge">Page Title</Typography>)
    expect(screen.getByRole('header')).toBeTruthy()
  })

  it('does not assign header role for body variants', () => {
    renderWithTheme(<Typography variant="bodyMedium">Body text</Typography>)
    expect(screen.queryByRole('header')).toBeNull()
  })

  it('uses bodyMedium variant by default', () => {
    renderWithTheme(<Typography>Default text</Typography>)
    expect(screen.queryByRole('header')).toBeNull()
  })
})
