import { Text, ScrollView } from 'react-native';
import { SafeAreaContainer } from '@/src/components/layout';
import { ProfileHeader } from './components/ProfileHeader';
import { useProfile } from './hooks/useProfile';
import type { ProfileData } from './types';
import theme from '@/src/theme';

export default function ProfileScreen() {
  const { profile, isLoading } = useProfile();

  return (
    <SafeAreaContainer edges={['top', 'left', 'right']}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: theme.spacing.l }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader profile={profile} />
        <Text style={{ marginTop: theme.spacing.xl }}>Profile Screen</Text>
      </ScrollView>
    </SafeAreaContainer>
  );
}

