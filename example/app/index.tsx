import { useRouter } from 'expo-router'
import { Button, Typography, Column } from '@rn-ui/components'
import { StyleSheet } from 'react-native'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <Column flex={1} p="lg" gap="lg">
      <Typography variant="headlineSmall">Components</Typography>
      <Column gap="sm">
        <Button style={styles.navButton} onPress={() => router.push('/appbar')}>
          AppBar
        </Button>
        <Button
          style={styles.navButton}
          onPress={() => router.push('/typography')}
        >
          Typography
        </Button>
        <Button style={styles.navButton} onPress={() => router.push('/button')}>
          Button
        </Button>
        <Button
          style={styles.navButton}
          onPress={() => router.push('/text-field')}
        >
          TextField
        </Button>
        <Button style={styles.navButton} onPress={() => router.push('/card')}>
          Card
        </Button>
        <Button style={styles.navButton} onPress={() => router.push('/list')}>
          List
        </Button>
        <Button
          style={styles.navButton}
          onPress={() => router.push('/layout')}
        >
          Layout
        </Button>
      </Column>
    </Column>
  )
}

const styles = StyleSheet.create({
  navButton: {
    alignSelf: 'stretch',
  },
})
