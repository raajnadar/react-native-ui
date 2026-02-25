import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@rn-ui/core'
import {
  Typography,
  Column,
  List,
  ListItem,
  ListDivider,
} from '@rn-ui/components'

function ChevronRight() {
  const theme = useTheme()
  return (
    <MaterialCommunityIcons
      name="chevron-right"
      size={24}
      color={theme.colors.onSurfaceVariant}
    />
  )
}

const components = [
  { label: 'AppBar', route: '/appbar' },
  { label: 'Typography', route: '/typography' },
  { label: 'Button', route: '/button' },
  { label: 'Chip', route: '/chip' },
  { label: 'TextField', route: '/text-field' },
  { label: 'Card', route: '/card' },
  { label: 'List', route: '/list' },
  { label: 'Layout', route: '/layout' },
] as const

export default function HomeScreen() {
  const router = useRouter()

  return (
    <Column>
      <Typography variant="headlineSmall" style={styles.heading}>
        Components
      </Typography>
      <List>
        {components.map((item, index) => (
          <Column key={item.route}>
            <ListItem
              headlineText={item.label}
              trailingContent={<ChevronRight />}
              onPress={() => router.push(item.route)}
            />
            {index < components.length - 1 && <ListDivider />}
          </Column>
        ))}
      </List>
    </Column>
  )
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 16,
    paddingLeft: 16,
  },
})
