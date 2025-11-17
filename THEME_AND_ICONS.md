# Theme & Icons Integration Guide

This document explains how to use the theme system and Phosphor icons together in your React Native app.

## Theme System Overview

Your theme (`src/theme/index.ts`) includes:

### Colors
- **Brand**: `brandPrimary` (#4eb0ff), `brandSecondary` (#8063ff)
- **Base**: `black`, `white`, `grey`, `lightGrey`, `transparent`
- **Text**: `textPrimary`, `textSecondary`
- **Status**: `red`, `green`
- **UI**: `borderSecondary`, `editProfile`

### Typography
- **Headings**: 2xs, xs, s, m, l, xl, 2xl, 3xl, 4xl, 5xl
- **Text**: xs, s, m, l, xl (with `regular` and `semibold` weights)
- Helper functions: `getTextStyle()`, `getHeadingStyle()`

### Spacing
- Scale from `2xs` (2px) to `12xl` (112px)

### Border Radius
- xs (4px) to 2xl (24px), plus `pill` and `circle`

### Border Width
- xs (1px) to xl (8px)

## Icons Overview

Phosphor React Native icons are integrated via the `Icon` component:

```tsx
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

<Icon 
  name="House" 
  size={24} 
  color={theme.colors.brandPrimary} 
  weight="regular"
/>
```

## Common Patterns

### 1. Icon with Heading

```tsx
import { View, Text } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme, { getHeadingStyle } from '@/src/theme';

<View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
  <Icon name="House" size={32} color={theme.colors.brandPrimary} weight="fill" />
  <Text style={getHeadingStyle('xl')}>Welcome</Text>
</View>
```

### 2. Icon Button

```tsx
import { TouchableOpacity } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

<TouchableOpacity
  style={{
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.lightGrey,
  }}
>
  <Icon name="Heart" size={24} color={theme.colors.red} weight="fill" />
</TouchableOpacity>
```

### 3. Icon with Text (List Item)

```tsx
import { View, Text } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme, { getTextStyle } from '@/src/theme';

<View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
  <Icon name="User" size={20} color={theme.colors.textSecondary} />
  <Text style={getTextStyle('m', 'regular')}>Profile Settings</Text>
</View>
```

### 4. Status Icons

```tsx
import { View, Text } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme, { getTextStyle } from '@/src/theme';

{/* Success */}
<View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
  <Icon name="CheckCircle" size={24} color={theme.colors.green} weight="fill" />
  <Text style={getTextStyle('l', 'regular')}>Operation successful</Text>
</View>

{/* Error */}
<View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
  <Icon name="XCircle" size={24} color={theme.colors.red} weight="fill" />
  <Text style={getTextStyle('l', 'regular')}>Error occurred</Text>
</View>
```

### 5. Navigation Icons

```tsx
import { Icon } from '@/src/components/ui';
import theme from '@/src/theme';

{/* Back button */}
<Icon name="ArrowLeft" size={24} color={theme.colors.textPrimary} />

{/* Close button */}
<Icon name="X" size={24} color={theme.colors.textPrimary} />

{/* Menu */}
<Icon name="List" size={24} color={theme.colors.textPrimary} />
```

## Color Mapping

Use theme colors consistently with icons:

| Use Case | Icon Color | Example |
|----------|-----------|---------|
| Primary actions | `theme.colors.brandPrimary` | Main buttons, links |
| Secondary actions | `theme.colors.brandSecondary` | Alternative actions |
| Default text/icons | `theme.colors.textPrimary` | Standard icons |
| Muted/secondary | `theme.colors.textSecondary` | Less important icons |
| Success | `theme.colors.green` | Check marks, success states |
| Error/Warning | `theme.colors.red` | Errors, warnings |
| Background elements | `theme.colors.grey` | Disabled states |

## Size Guidelines

Standard icon sizes based on context:

| Context | Size | Usage |
|---------|------|-------|
| Inline with small text | 16px | Lists, small buttons |
| Inline with body text | 20px | List items, labels |
| Standard buttons | 24px | Default size |
| Headings | 32px | Large headings |
| Feature icons | 48px+ | Hero sections, empty states |

## Complete Example

```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '@/src/components/ui';
import theme, { getTextStyle, getHeadingStyle } from '@/src/theme';

export function ExampleScreen() {
  return (
    <View style={{ padding: theme.spacing.l }}>
      {/* Header with icon */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: theme.spacing.s,
        marginBottom: theme.spacing.xl 
      }}>
        <Icon 
          name="House" 
          size={32} 
          color={theme.colors.brandPrimary} 
          weight="fill"
        />
        <Text style={getHeadingStyle('xl')}>
          Home
        </Text>
      </View>

      {/* Action buttons */}
      <View style={{ 
        flexDirection: 'row', 
        gap: theme.spacing.m,
        marginBottom: theme.spacing.xl 
      }}>
        <TouchableOpacity
          style={{
            padding: theme.spacing.m,
            borderRadius: theme.borderRadius.m,
            backgroundColor: theme.colors.lightGrey,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="Heart" size={24} color={theme.colors.red} weight="fill" />
        </TouchableOpacity>
      </View>

      {/* List items */}
      <View style={{ gap: theme.spacing.m }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          gap: theme.spacing.s 
        }}>
          <Icon name="User" size={20} color={theme.colors.textSecondary} />
          <Text style={getTextStyle('m', 'regular')}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
}
```

## Best Practices

1. **Always use theme colors** - Never hardcode colors
2. **Consistent sizing** - Stick to standard sizes (16, 20, 24, 32, 48)
3. **Appropriate weights** - Use `regular` for most cases, `fill` for emphasis
4. **Proper spacing** - Use `theme.spacing` values for gaps and padding
5. **Semantic icons** - Choose icons that clearly represent their function
6. **Accessibility** - Ensure icons have sufficient size and contrast

## Resources

- **Theme**: `src/theme/index.ts`
- **Icon Component**: `src/components/ui/Icon.tsx`
- **Icons Guide**: `ICONS_GUIDE.md`
- **Phosphor Icons**: https://phosphoricons.com/

