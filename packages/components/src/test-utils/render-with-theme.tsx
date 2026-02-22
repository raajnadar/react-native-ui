import { render } from '@testing-library/react-native'
import type { ReactElement, ReactNode } from 'react'
import { MaterialProvider } from '@rn-ui/core'

function Providers({ children }: { children: ReactNode }) {
  return <MaterialProvider>{children}</MaterialProvider>
}

export function renderWithTheme(ui: ReactElement) {
  return render(ui, { wrapper: Providers })
}
