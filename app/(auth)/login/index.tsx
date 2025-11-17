import { View, Text, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaContainer } from '@/src/components/layout';
import { LoginForm } from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import theme, { getHeadingStyle, getTextStyle } from '@/src/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

/**
 * Login Screen matching Figma design
 * Based on: https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=47-216
 */
export default function LoginScreen() {
  const { handleLogin, isLoading } = useLogin();
  const router = useRouter();

  return (
    <SafeAreaContainer edges={['top', 'left', 'right', 'bottom']} backgroundColor={theme.colors.black}>
      <LinearGradient
        colors={['#262626', '#000000']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      >
        {/* Skip Button */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.push('/(tabs)/home')}
          activeOpacity={0.7}
        >
          <Text style={[styles.skipText, { fontFamily: theme.fonts.semibold }]}>SKIP</Text>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={[styles.welcomeTitle, { fontFamily: theme.fonts.semibold }]}>
              Welcome!
            </Text>
            <Text style={[styles.welcomeSubtitle, { fontFamily: theme.fonts.semibold }]}>
              Only one step away from the{'\n'}wonderful world of artists!
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

            {/* Terms Text */}
            <Text style={[styles.termsText, { fontFamily: theme.fonts.regular }]}>
              By continuing, you agree with our terms{'\n'}of service and privacy policy
            </Text>
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
  skipButton: {
    position: 'absolute',
    top: 28,
    right: 20,
    zIndex: 10,
    padding: theme.spacing.xs,
  },
  skipText: {
    ...getTextStyle('m', 'semibold'),
    color: theme.colors.white,
    textDecorationLine: 'underline',
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
  termsText: {
    ...getTextStyle('xs', 'regular'),
    color: theme.colors.white,
    opacity: 0.7,
    textAlign: 'center',
    width: 270,
    lineHeight: 14,
  },
});
