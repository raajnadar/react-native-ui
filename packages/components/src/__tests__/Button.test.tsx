import { render, screen, fireEvent } from '@testing-library/react-native'
import type { ReactElement, ReactNode } from 'react'
import { MaterialProvider } from '@rn-ui/core'

import { Button } from '../button/Button'

function Providers({ children }: { children: ReactNode }) {
  return <MaterialProvider>{children}</MaterialProvider>
}

function renderWithTheme(ui: ReactElement) {
  return render(ui, { wrapper: Providers })
}

describe('Button', () => {
  it('renders the label text', () => {
    renderWithTheme(<Button>Press me</Button>)
    expect(screen.getByText('Press me')).toBeTruthy()
  })

  it('has the button accessibility role', () => {
    renderWithTheme(<Button>Action</Button>)
    expect(screen.getByRole('button')).toBeTruthy()
  })

  it('calls onPress when pressed', () => {
    const onPress = jest.fn()
    renderWithTheme(<Button onPress={onPress}>Tap</Button>)
    fireEvent.press(screen.getByRole('button'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it('does not call onPress when disabled', () => {
    const onPress = jest.fn()
    renderWithTheme(
      <Button onPress={onPress} disabled>
        Tap
      </Button>,
    )
    fireEvent.press(screen.getByRole('button'))
    expect(onPress).not.toHaveBeenCalled()
  })

  it('renders a leading icon', () => {
    renderWithTheme(<Button leadingIcon="check">OK</Button>)
    expect(screen.getByText('check')).toBeTruthy()
  })

  it('renders a trailing icon', () => {
    renderWithTheme(<Button trailingIcon="arrow-right">Next</Button>)
    expect(screen.getByText('arrow-right')).toBeTruthy()
  })
})
