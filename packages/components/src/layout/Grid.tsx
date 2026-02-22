import React, { useMemo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'

import { Row } from './Row'
import type { GridProps } from './types'

export function Grid({ columns, children, ...rowProps }: GridProps) {
  const cellStyle = useMemo<ViewStyle>(
    () => ({
      flexBasis: `${100 / columns}%` as unknown as number,
      flexShrink: 1,
    }),
    [columns],
  )

  return (
    <Row wrap {...rowProps}>
      {React.Children.map(children, (child) =>
        child != null ? <View style={cellStyle}>{child}</View> : null,
      )}
    </Row>
  )
}
