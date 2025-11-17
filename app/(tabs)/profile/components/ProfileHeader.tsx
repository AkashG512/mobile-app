import { View, Text, StyleSheet } from 'react-native';
import type { ProfileData } from '../types';
import theme, { getHeadingStyle } from '@/src/theme';

interface ProfileHeaderProps {
  profile: ProfileData | null;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <View>
      <Text style={styles.name}>{profile?.name || 'Loading...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    ...getHeadingStyle('l'),
    color: theme.colors.textPrimary,
  },
});