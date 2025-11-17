import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { OTPInput } from '@/src/components/ui/OTPInput';
import { Button } from '@/src/components/ui';
import type { OTPFormData } from '../types';
import theme, { getTextStyle } from '@/src/theme';

interface OTPFormProps {
  onSubmit: (data: OTPFormData) => void;
  onResend: () => void;
  isLoading?: boolean;
  resendCooldown?: number;
  canResend?: boolean;
}

// Validation schema
const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is required')
    .length(6, 'OTP must be 6 digits')
    .matches(/^[0-9]{6}$/, 'OTP must contain only numbers'),
});

const initialValues: OTPFormData = {
  otp: '',
};

/**
 * OTP Form component with Formik
 */
export function OTPForm({
  onSubmit,
  onResend,
  isLoading,
  resendCooldown = 0,
  canResend = true,
}: OTPFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit, values, errors, setFieldValue, setFieldTouched }) => (
        <View style={styles.container}>
          <View style={styles.formContent}>
            {/* OTP Input */}
            <OTPInput
              length={6}
              value={values.otp}
              onChangeText={(value) => {
                setFieldValue('otp', value);
                if (value.length === 6) {
                  setFieldTouched('otp', true);
                }
              }}
              error={errors.otp}
            />

            {/* Continue Button */}
            <Button
              title="Continue"
              variant="primary"
              size="large"
              fullWidth
              onPress={() => handleSubmit()}
              loading={isLoading}
              disabled={isLoading || values.otp.length !== 6}
            />

            {/* Resend OTP Section */}
            <View style={styles.resendContainer}>
              <Text style={[styles.resendQuestion, { fontFamily: theme.fonts.regular }]}>
                Didn't receive OTP?
              </Text>
              <TouchableOpacity
                onPress={onResend}
                disabled={!canResend}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.resendText,
                    { fontFamily: theme.fonts.semibold },
                    !canResend && styles.resendTextDisabled,
                  ]}
                >
                  {canResend ? 'Resend' : `Resend in ${resendCooldown}s`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  formContent: {
    gap: theme.spacing.m,
    width: '100%',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 216,
    alignSelf: 'center',
    gap: 17,
  },
  resendQuestion: {
    ...getTextStyle('s', 'regular'),
    color: theme.colors.white,
  },
  resendText: {
    ...getTextStyle('l', 'semibold'),
    color: theme.colors.white,
  },
  resendTextDisabled: {
    opacity: 0.6,
  },
});

