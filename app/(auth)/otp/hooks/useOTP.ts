import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'expo-router';
import type { OTPFormData } from '../types';

const RESEND_COOLDOWN = 30; // seconds

export function useOTP(mobileNumber?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const router = useRouter();

  // Countdown timer for resend
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleVerifyOTP = async (data: OTPFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual OTP verification API call
      console.log('Verifying OTP:', data.otp, 'for mobile:', mobileNumber);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Navigate to home on success
      router.replace('/(tabs)/home');
    } catch (error) {
      console.error('OTP verification error:', error);
      // Handle error (show toast, etc.)
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = useCallback(async () => {
    if (resendCooldown > 0) return;
    
    try {
      // TODO: Implement actual resend OTP API call
      console.log('Resending OTP to:', mobileNumber);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Start cooldown
      setResendCooldown(RESEND_COOLDOWN);
    } catch (error) {
      console.error('Resend OTP error:', error);
    }
  }, [mobileNumber, resendCooldown]);

  return {
    handleVerifyOTP,
    handleResendOTP,
    isLoading,
    resendCooldown,
    canResend: resendCooldown === 0,
  };
}

