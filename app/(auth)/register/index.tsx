import { View, Text } from 'react-native';
import { RegisterForm } from './components/RegisterForm';
import { useRegister } from './hooks/useRegister';
import type { RegisterFormData } from './types';

export default function RegisterScreen() {
  const { handleRegister, isLoading } = useRegister();

  return (
    <View>
      <Text>Register Screen</Text>
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
    </View>
  );
}

