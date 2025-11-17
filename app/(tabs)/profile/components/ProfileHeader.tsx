import { View, Text } from 'react-native';
import type { ProfileData } from '../types';

interface ProfileHeaderProps {
  profile: ProfileData | null;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <View>
      <Text>{profile?.name || 'Loading...'}</Text>
    </View>
  );
}

