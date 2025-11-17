import { Text, View, StyleSheet } from 'react-native';
import theme, { getHeadingStyle } from '@/src/theme';

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.l,
    backgroundColor: theme.colors.white,
  },
  text: {
    ...getHeadingStyle('l'),
    color: theme.colors.textPrimary,
  },
});