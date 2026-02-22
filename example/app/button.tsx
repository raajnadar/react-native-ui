import {
  Button,
  Column,
  Grid,
  IconButton,
  Row,
  Typography,
} from '@rn-ui/components'
import { ScrollView, StyleSheet } from 'react-native'

const variants = ['filled', 'elevated', 'tonal', 'outlined', 'text'] as const
const iconVariants = [
  { label: 'Filled', value: 'filled' },
  { label: 'Tonal', value: 'tonal' },
  { label: 'Outlined', value: 'outlined' },
  { label: 'Standard', value: 'standard' },
] as const
const iconSizes = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
] as const

export default function ButtonScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="headlineSmall">Button Showcase</Typography>

      <Column gap="sm">
        <Typography variant="titleSmall">Variants</Typography>
        <Row wrap gap="sm">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {`${variant} button`}
            </Button>
          ))}
        </Row>
      </Column>

      <Column gap="sm">
        <Typography variant="titleSmall">Disabled Variants</Typography>
        <Row wrap gap="sm">
          {variants.map((variant) => (
            <Button key={`disabled-${variant}`} variant={variant} disabled>
              {`${variant} button`}
            </Button>
          ))}
        </Row>
      </Column>

      <Column gap="sm">
        <Typography variant="titleSmall">Buttons: With Icons</Typography>
        <Row wrap gap="sm">
          <Button variant="filled" leadingIcon="plus">
            Add Item
          </Button>
          <Button variant="outlined" trailingIcon="arrow-right">
            Continue
          </Button>
          <Button
            variant="tonal"
            leadingIcon="heart-outline"
            trailingIcon="share-variant"
          >
            Favorite
          </Button>
        </Row>
      </Column>

      <Column gap="sm">
        <Typography variant="titleSmall">IconButton: Variants</Typography>
        <Grid columns={4} gap="sm">
          {iconVariants.map((option) => (
            <Column key={option.value} align="center" gap="xs">
              <IconButton
                icon="heart-outline"
                variant={option.value}
                accessibilityLabel={`${option.label} heart`}
              />
              <Typography variant="labelSmall">{option.label}</Typography>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column gap="sm">
        <Typography variant="titleSmall">IconButton: Sizes</Typography>
        <Grid columns={3} gap="sm">
          {iconSizes.map((option) => (
            <Column key={option.value} align="center" gap="xs">
              <IconButton
                icon="heart-outline"
                size={option.value}
                variant="standard"
                accessibilityLabel={`${option.label} heart`}
              />
              <Typography variant="labelSmall">{option.label}</Typography>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column gap="sm">
        <Typography variant="titleSmall">IconButton: States</Typography>
        <Column gap="sm">
          {iconVariants.map((option) => (
            <Column key={`state-${option.value}`} gap="xs">
              <Typography variant="labelSmall">{option.label}</Typography>
              <Grid columns={4} gap="sm">
                <IconButton
                  icon="heart-outline"
                  variant={option.value}
                  accessibilityLabel="Like"
                />
                <IconButton
                  icon="heart-outline"
                  selectedIcon="heart"
                  selected
                  variant={option.value}
                  accessibilityLabel="Like"
                />
                <IconButton
                  icon="heart-outline"
                  selected={false}
                  variant={option.value}
                  disabled
                  accessibilityLabel="Like"
                />
                <IconButton
                  icon="heart-outline"
                  selectedIcon="heart"
                  selected
                  variant={option.value}
                  disabled
                  accessibilityLabel="Like"
                />
              </Grid>
            </Column>
          ))}
        </Column>
      </Column>
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
})
