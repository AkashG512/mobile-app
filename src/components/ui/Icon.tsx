import React from 'react';
import * as PhosphorIcons from 'phosphor-react-native';
import theme from '@/src/theme';

export type IconName = keyof typeof PhosphorIcons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  style?: any;
}

/**
 * Icon component that integrates Phosphor icons with the theme system
 * 
 * @example
 * ```tsx
 * import { Icon } from '@/src/components/ui';
 * 
 * <Icon name="House" size={24} color={theme.colors.brandPrimary} />
 * <Icon name="User" weight="bold" />
 * ```
 */
export function Icon({ 
  name, 
  size = 24, 
  color = theme.colors.textPrimary,
  weight = 'regular',
  style 
}: IconProps) {
  const IconComponent = PhosphorIcons[name] as React.ComponentType<any>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Phosphor icons`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      weight={weight}
      style={style}
    />
  );
}

export default Icon;

