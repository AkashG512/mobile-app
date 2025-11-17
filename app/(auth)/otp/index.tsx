import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaContainer } from '@/src/components/layout';
import { OTPForm } from './components/OTPForm';
import { useOTP } from './hooks/useOTP';
import theme, { getHeadingStyle, getTextStyle } from '@/src/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useLocalSearchParams } from 'expo-router';

/**
 * OTP Screen matching Figma design
 * Based on: https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=47-232
 */
export default function OTPScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ mobileNumber?: string }>();
  const mobileNumber = params.mobileNumber;
  
  const { handleVerifyOTP, handleResendOTP, isLoading, resendCooldown, canResend } = useOTP(
    mobileNumber
  );

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

          {/* OTP Form */}
          <View style={styles.formContainer}>
            <OTPForm
              onSubmit={handleVerifyOTP}
              onResend={handleResendOTP}
              isLoading={isLoading}
              resendCooldown={resendCooldown}
              canResend={canResend}
            />
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
});

