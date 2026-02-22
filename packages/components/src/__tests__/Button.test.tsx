import { screen, fireEvent } from '@testing-library/react-native'

import { Button } from '../button/Button'
import { renderWithTheme } from '../test-utils/render-with-theme'

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
