import { useState } from 'react';
import type { RegisterFormData } from '../types';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Register logic here
      console.log('Registering with:', data);
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleRegister,
    isLoading,
  };
}

