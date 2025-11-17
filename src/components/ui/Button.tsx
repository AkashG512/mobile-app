import theme, { getTextStyle } from '@/src/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Button component with multiple variants matching Figma design
 * Based on: https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=58-1517
 * * @example
 * ```tsx
 * <Button title="Primary" variant="primary" onPress={() => {}} />
 * <Button title="Secondary" variant="secondary" onPress={() => {}} />
 * <Button title="Loading" loading onPress={() => {}} />
 * ```
 */
export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const buttonStyles = [
    styles.button,
    styles[`button_${size}`],
    fullWidth && styles.button_fullWidth,
    variant === 'secondary' && styles.button_secondary,
    isDisabled && styles.button_disabled,
    style,
  ];

  const textStyles = [
    variant === 'primary' ? styles.text_primary : styles.text_secondary,
    styles[`text_${size}`],
    isDisabled && styles.text_disabled,
    textStyle,
  ];

  const content = (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? theme.colors.white : '#333333'}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View style={styles.iconLeft}>{icon}</View>}
          <Text style={[textStyles, { fontFamily: theme.fonts.semibold }]}>{title}</Text>
          {icon && iconPosition === 'right' && <View style={styles.iconRight}>{icon}</View>}
        </>
      )}
    </View>
  );

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.7}
        style={buttonStyles}
      >
        <LinearGradient
          colors={[theme.colors.brandPrimary, theme.colors.brandSecondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradient, buttonStyles]}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={buttonStyles}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  button_small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    minHeight: 35,
  },
  button_medium: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    minHeight: 40,
  },
  button_large: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 48,
  },
  button_fullWidth: {
    width: '100%',
  },
  button_secondary: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borderSecondary,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.28,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button_disabled: {
    opacity: 0.5,
  },
  gradient: {
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
  },
  iconLeft: {
    marginRight: theme.spacing.xs,
  },
  iconRight: {
    marginLeft: theme.spacing.xs,
  },
  text_primary: {
    ...getTextStyle('l', 'semibold'),
    color: theme.colors.white,
  },
  text_secondary: {
    ...getTextStyle('l', 'semibold'),
    color: '#333333', // Match Figma: fill_ZYULL8
  },
  text_small: {
    ...getTextStyle('m', 'regular'), // Was 14px/20px
  },
  text_medium: {
    ...getTextStyle('l', 'regular'), // Was 16px/24px
  },
  text_large: {
    fontSize: 18, // 18px is custom, not in theme text styles
    lineHeight: 27,
  },
  text_disabled: {
    opacity: 0.6,
  },
});