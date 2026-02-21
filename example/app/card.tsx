import { Card, Typography } from '@rn-ui/components'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'

const variants = ['elevated', 'filled', 'outlined'] as const

export default function CardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="headlineSmall">Card Showcase</Typography>

      <View style={styles.section}>
        <Typography variant="titleSmall">Variants</Typography>
        <View style={styles.items}>
          {variants.map((variant) => (
            <Card key={variant} variant={variant} style={styles.card}>
              <View style={styles.cardContent}>
                <Typography variant="titleMedium">{variant}</Typography>
                <Typography variant="bodyMedium">
                  This is a non-interactive {variant} card.
                </Typography>
              </View>
            </Card>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">Interactive Variants</Typography>
        <View style={styles.items}>
          {variants.map((variant) => (
            <Card
              key={`interactive-${variant}`}
              variant={variant}
              style={styles.card}
              onPress={() => Alert.alert(`${variant} card pressed`)}
            >
              <View style={styles.cardContent}>
                <Typography variant="titleMedium">{variant}</Typography>
                <Typography variant="bodyMedium">
                  Tap this interactive {variant} card.
                </Typography>
              </View>
            </Card>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">Disabled Variants</Typography>
        <View style={styles.items}>
          {variants.map((variant) => (
            <Card
              key={`disabled-${variant}`}
              variant={variant}
              style={styles.card}
              onPress={() => {}}
              disabled
            >
              <View style={styles.cardContent}>
                <Typography variant="titleMedium">{variant}</Typography>
                <Typography variant="bodyMedium">
                  Disabled {variant} card.
                </Typography>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    rowGap: 20,
  },
  section: {
    rowGap: 10,
  },
  items: {
    rowGap: 12,
  },
  card: {
    alignSelf: 'stretch',
  },
  cardContent: {
    padding: 16,
    rowGap: 8,
  },
})
