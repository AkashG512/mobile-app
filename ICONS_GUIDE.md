# Phosphor Icons Guide

This guide shows you how to use Phosphor icons in your React Native app with the theme system.

## Installation

Phosphor React Native is already installed in your project:
```json
"phosphor-react-native": "^3.0.1"
```

## Using Icons

### Method 1: Using the Icon Component (Recommended)

The `Icon` component integrates with your theme system:

```tsx
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

// Basic usage
<Icon name="House" />

// With custom size and color
<Icon 
  name="User" 
  size={32} 
  color={theme.colors.brandPrimary} 
/>

// With different weights
<Icon 
  name="Heart" 
  weight="fill" 
  color={theme.colors.red} 
/>
```

### Method 2: Direct Import from Phosphor

You can also import icons directly:

```tsx
import { House, User, Heart } from 'phosphor-react-native';
import theme from '@/src/theme';

<House 
  size={24} 
  color={theme.colors.textPrimary} 
  weight="regular" 
/>

<User 
  size={32} 
  color={theme.colors.brandPrimary} 
  weight="bold" 
/>
```

## Icon Weights

Phosphor icons support multiple weights:
- `thin` - Thin stroke
- `light` - Light stroke
- `regular` - Regular stroke (default)
- `bold` - Bold stroke
- `fill` - Filled icon
- `duotone` - Two-tone icon

## Common Icons

Here are some commonly used icons:

### Navigation
- `House` - Home
- `User` - Profile
- `MagnifyingGlass` - Search
- `Bell` - Notifications
- `Gear` - Settings
- `ArrowLeft` - Back
- `ArrowRight` - Forward
- `X` - Close

### Actions
- `Plus` - Add
- `Minus` - Remove
- `Trash` - Delete
- `Pencil` - Edit
- `Check` - Confirm
- `X` - Cancel
- `Heart` - Like/Favorite
- `Share` - Share

### Status
- `CheckCircle` - Success
- `Warning` - Warning
- `XCircle` - Error
- `Info` - Information

### Media
- `Play` - Play
- `Pause` - Pause
- `Camera` - Camera
- `Image` - Image
- `Video` - Video

## Using Icons with Theme Colors

```tsx
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

// Using theme colors
<Icon name="House" color={theme.colors.brandPrimary} />
<Icon name="User" color={theme.colors.textSecondary} />
<Icon name="Heart" color={theme.colors.red} weight="fill" />
<Icon name="CheckCircle" color={theme.colors.green} />
```

## Icon Sizes

Use consistent sizes based on your design system:

```tsx
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

// Small icons (16-20px)
<Icon name="Heart" size={16} />

// Medium icons (24px - default)
<Icon name="User" size={24} />

// Large icons (32-40px)
<Icon name="House" size={32} />

// Extra large icons (48px+)
<Icon name="Camera" size={48} />
```

## Example: Icon Button Component

```tsx
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

interface IconButtonProps {
  icon: string;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function IconButton({ 
  icon, 
  onPress, 
  size = 24, 
  color = theme.colors.textPrimary,
  style 
}: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
}
```

## Example: Icon with Text

```tsx
import { View, Text } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme, { getTextStyle } from '@/src/theme';

export function IconText({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
      <Icon name={icon} size={20} color={theme.colors.textPrimary} />
      <Text style={getTextStyle('m', 'regular')}>{text}</Text>
    </View>
  );
}
```

## Finding Icons

To find available icons:
1. Visit [Phosphor Icons](https://phosphoricons.com/)
2. Search for the icon you need
3. Use the PascalCase name (e.g., "house" → `House`, "user-circle" → `UserCircle`)

## TypeScript Support

The `Icon` component includes TypeScript types:

```tsx
import { Icon, type IconName } from '@/src/components/ui';

// Type-safe icon names
const iconName: IconName = 'House'; // ✅ Valid
const invalidIcon: IconName = 'InvalidIcon'; // ❌ Type error
```

## Best Practices

1. **Use consistent sizes** - Stick to a few standard sizes (16, 20, 24, 32, 48)
2. **Use theme colors** - Always use colors from `theme.colors` for consistency
3. **Choose appropriate weights** - Use `regular` for most cases, `fill` for emphasis
4. **Keep icons accessible** - Ensure sufficient contrast and size for touch targets
5. **Use the Icon component** - It provides better integration with your theme system

## Troubleshooting

### Icon not found
If you see a warning "Icon not found", check:
- The icon name is in PascalCase
- The icon exists in Phosphor Icons library
- You've imported it correctly

### Icon not displaying
- Check that `react-native-svg` is installed (already in your dependencies)
- Ensure the icon name matches exactly (case-sensitive)
- Verify the color prop is a valid color string

