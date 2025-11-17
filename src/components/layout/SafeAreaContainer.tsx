import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '@/src/theme';

interface SafeAreaContainerProps extends ViewProps {
  children: React.ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  backgroundColor?: string;
}

/**
 * Container component that respects safe areas
 * Use this for screens that need safe area handling
 */
export function SafeAreaContainer({
  children,
  edges = ['top', 'left', 'right'],
  backgroundColor = theme.colors.white,
  style,
  ...props
}: SafeAreaContainerProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, { backgroundColor }, style]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
}

/**
 * Hook to get safe area insets for custom layouts
 */
export function useSafeArea() {
  return useSafeAreaInsets();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

