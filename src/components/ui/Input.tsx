import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps, Platform } from 'react-native';
import theme from '@/src/theme';
import { getTextStyle } from '@/src/theme';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: any;
}

/**
 * Input component matching Figma design
 * 
 * @example
 * ```tsx
 * <Input 
 *   placeholder="Mobile number" 
 *   value={value}
 *   onChangeText={onChangeText}
 * />
 * ```
 */
export function Input({
  label,
  error,
  containerStyle,
  style,
  placeholderTextColor = 'rgba(0, 0, 0, 0.35)',
  ...props
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.inputContainer_error]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={placeholderTextColor}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    ...getTextStyle('m', 'semibold'),
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: 13,
    gap: theme.spacing.s,
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
  inputContainer_error: {
    borderWidth: 1,
    borderColor: theme.colors.red,
  },
  input: {
    flex: 1,
    ...getTextStyle('m', 'semibold'),
    color: theme.colors.textPrimary,
    padding: 0, // Remove default padding
    fontSize: 14,
    lineHeight: 20, // 1.4285714285714286em
  },
  error: {
    ...getTextStyle('xs', 'regular'),
    color: theme.colors.red,
    marginTop: theme.spacing.xs,
  },
});

