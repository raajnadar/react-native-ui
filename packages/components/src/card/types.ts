import type { ReactNode } from 'react'
import type { ViewProps } from 'react-native'

export type CardVariant = 'elevated' | 'filled' | 'outlined'

export interface CardProps extends ViewProps {
  children: ReactNode
  variant?: CardVariant
  onPress?: () => void
  disabled?: boolean
}
