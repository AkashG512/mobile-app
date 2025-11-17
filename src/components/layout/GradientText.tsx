import theme from '@/src/theme';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

/**
 * Text component with gradient color
 * Uses theme gradient colors by default (brandPrimary to brandSecondary)
 */
export function GradientText({
  children,
  colors = [theme.colors.brandPrimary, theme.colors.brandSecondary],
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  style,
  ...textProps
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: 'transparent' }]} {...textProps}>
          {children}
        </Text>
      }
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <Text style={[style, { opacity: 0 }]} {...textProps}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

