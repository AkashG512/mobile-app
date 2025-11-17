import { Button, Input } from '@/src/components/ui';
import theme from '@/src/theme';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import type { LoginFormData } from '../types';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

// Validation schema
const validationSchema = Yup.object().shape({
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10,15}$/, 'Please enter a valid mobile number'),
});

const initialValues: LoginFormData = {
  mobileNumber: '',
};

/**
 * Login Form component with Formik
 */
export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.formContent}>
            <Input
              placeholder="Mobile number"
              value={values.mobileNumber}
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              error={touched.mobileNumber && errors.mobileNumber ? errors.mobileNumber : undefined}
              keyboardType="phone-pad"
              autoComplete="tel"
              textContentType="telephoneNumber"
              style={styles.input}
            />

            <Button
              title="Continue"
              variant="primary"
              size="large"
              fullWidth
              onPress={() => handleSubmit()}
              loading={isLoading}
              disabled={isLoading}
            />
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
  input: {
    color: theme.colors.textPrimary,
  },
});
