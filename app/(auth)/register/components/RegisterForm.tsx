import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/src/components/ui';
import theme from '@/src/theme';
import type { RegisterFormData } from '../types';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isLoading?: boolean;
}

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const initialValues: RegisterFormData = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
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
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name ? errors.name : undefined}
              autoCapitalize="words"
              textContentType="name"
              style={styles.input}
            />
            <Input
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email ? errors.email : undefined}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
              style={styles.input}
            />
            <Input
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password ? errors.password : undefined}
              secureTextEntry
              textContentType="password"
              style={styles.input}
            />
            <Button
              title="Register"
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