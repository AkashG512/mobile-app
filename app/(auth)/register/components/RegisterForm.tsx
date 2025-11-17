import { View, TextInput, Button } from 'react-native';
import type { RegisterFormData } from '../types';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isLoading?: boolean;
}

export function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
  return (
    <View>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Register" onPress={() => onSubmit({ name: '', email: '', password: '' })} disabled={isLoading} />
    </View>
  );
}

