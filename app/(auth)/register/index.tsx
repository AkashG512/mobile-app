import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaContainer } from '@/src/components/layout';
import { RegisterForm } from './components/RegisterForm';
import { useRegister } from './hooks/useRegister';
import theme, { getHeadingStyle, getTextStyle } from '@/src/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen() {
  const { handleRegister, isLoading } = useRegister();

  return (
    <SafeAreaContainer edges={['top', 'left', 'right', 'bottom']} backgroundColor={theme.colors.black}>
      <LinearGradient
        colors={['#262626', '#000000']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={[styles.welcomeTitle, { fontFamily: theme.fonts.semibold }]}>
              Create Account
            </Text>
            <Text style={[styles.welcomeSubtitle, { fontFamily: theme.fonts.semibold }]}>
              Join the wonderful world of artists!
            </Text>
          </View>

          {/* Register Form */}
          <View style={styles.formContainer}>
            <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: 100,
    paddingBottom: theme.spacing['2xl'],
  },
  welcomeSection: {
    gap: theme.spacing.l,
    marginBottom: theme.spacing['2xl'],
    width: 208,
  },
  welcomeTitle: {
    ...getHeadingStyle('l'),
    color: theme.colors.white,
    letterSpacing: -1,
  },
  welcomeSubtitle: {
    ...getTextStyle('l', 'semibold'),
    color: theme.colors.white,
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 335,
    alignSelf: 'center',
    gap: theme.spacing.l,
    alignItems: 'center',
  },
});