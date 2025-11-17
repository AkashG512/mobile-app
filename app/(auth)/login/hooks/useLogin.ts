import { useRouter } from 'expo-router';
import { useState } from 'react';
import type { LoginFormData } from '../types';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual login API call
      console.log('Logging in with:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Navigate to OTP screen on success
      router.push({
        pathname: '/(auth)/otp',
        params: { mobileNumber: data.mobileNumber },
      });
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    isLoading,
  };
}

