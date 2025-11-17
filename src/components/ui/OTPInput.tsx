import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';
import theme from '@/src/theme';
import { getTextStyle, getHeadingStyle } from '@/src/theme';

export interface OTPInputProps {
  length?: number;
  value: string;
  onChangeText: (value: string) => void;
  onComplete?: (value: string) => void;
  error?: string;
}

/**
 * OTP Input component for entering verification codes
 * * @example
 * ```tsx
 * <OTPInput
 * length={6}
 * value={otp}
 * onChangeText={setOtp}
 * onComplete={(code) => console.log('OTP:', code)}
 * />
 * ```
 */
export function OTPInput({
  length = 6,
  value,
  onChangeText,
  onComplete,
  error,
}: OTPInputProps) {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleChangeText = (text: string, index: number) => {
    // Only allow numbers
    const numericText = text.replace(/[^0-9]/g, '');
    
    if (numericText.length > 1) {
      // Handle paste
      const pastedValue = numericText.slice(0, length);
      onChangeText(pastedValue);
      
      // Focus the last filled input or next empty
      const nextIndex = Math.min(pastedValue.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      setFocusedIndex(nextIndex);
    } else if (numericText.length === 1) {
      // Single digit input
      const newValue = value.split('');
      newValue[index] = numericText;
      const updatedValue = newValue.join('').slice(0, length);
      onChangeText(updatedValue);
      
      // Move to next input
      if (index < length - 1 && numericText) {
        inputRefs.current[index + 1]?.focus();
        setFocusedIndex(index + 1);
      }
    } else {
      // Backspace - clear current and move to previous
      const newValue = value.split('');
      newValue[index] = '';
      onChangeText(newValue.join(''));
      
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {Array.from({ length }).map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            style={[
              styles.input,
              focusedIndex === index && styles.inputFocused,
              error && styles.inputError,
            ]}
            value={value[index] || ''}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.s,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    ...getHeadingStyle('m'), // Was getTextStyle('l') with 24px font
    textAlign: 'center',
    color: theme.colors.textPrimary,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.16,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: theme.colors.brandPrimary,
  },
  inputError: {
    borderWidth: 1,
    borderColor: theme.colors.red,
  },
  errorContainer: {
    marginTop: theme.spacing.xs,
  },
  errorText: {
    ...getTextStyle('xs', 'regular'),
    color: theme.colors.red,
    textAlign: 'center',
  },
});