import { SafeAreaContainer } from '@/src/components/layout';
import theme, { getHeadingStyle } from '@/src/theme';
import { ScrollView, Text } from 'react-native';

export default function BookArtistScreen() {
  return (
    <SafeAreaContainer edges={['top', 'left', 'right']}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          flexGrow: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: theme.spacing.xl 
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={getHeadingStyle('xl')}>Book Artist</Text>
      </ScrollView>
    </SafeAreaContainer>
  );
}

