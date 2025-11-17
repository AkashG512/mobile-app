# Button Component Usage Guide

This guide shows you how to use the Button component with all its variations based on the Figma design.

## Component Location

- **Component**: `src/components/ui/Button.tsx`
- **Exported from**: `src/components/ui/index.ts`

## Basic Usage

```tsx
import { Button } from '@/src/components/ui';

// Primary button (gradient background)
<Button title="Button" variant="primary" onPress={() => {}} />

// Secondary button (white background with border)
<Button title="Button" variant="secondary" onPress={() => {}} />
```

## Props

### Required Props

- `title: string` - Button text
- `onPress: () => void` - Press handler

### Optional Props

- `variant?: 'primary' | 'secondary'` - Button style (default: `'primary'`)
- `size?: 'small' | 'medium' | 'large'` - Button size (default: `'medium'`)
- `fullWidth?: boolean` - Make button full width (default: `false`)
- `disabled?: boolean` - Disable button (default: `false`)
- `loading?: boolean` - Show loading spinner (default: `false`)
- `icon?: React.ReactNode` - Icon element
- `iconPosition?: 'left' | 'right'` - Icon position (default: `'left'`)
- `style?: ViewStyle` - Custom container style
- `textStyle?: TextStyle` - Custom text style

## Variants

### Primary Button

Gradient background with white text:

```tsx
<Button 
  title="Primary Button" 
  variant="primary" 
  onPress={() => console.log('Pressed')} 
/>
```

**Features:**
- Gradient background (brandPrimary → brandSecondary)
- White text
- Shadow effect
- Border radius: 12px (medium) or 8px (small)

### Secondary Button

White background with border and dark text:

```tsx
<Button 
  title="Secondary Button" 
  variant="secondary" 
  onPress={() => console.log('Pressed')} 
/>
```

**Features:**
- White background
- Dark text (#333333)
- Border (#999999)
- Shadow effect
- Same border radius as primary

## Sizes

### Small

```tsx
<Button title="Small" size="small" onPress={() => {}} />
```

- Padding: 8px 12px
- Min height: 35px
- Border radius: 12px

### Medium (Default)

```tsx
<Button title="Medium" size="medium" onPress={() => {}} />
```

- Padding: 12px
- Min height: 40px
- Border radius: 12px (primary) or 8px (secondary)

### Large

```tsx
<Button title="Large" size="large" onPress={() => {}} />
```

- Padding: 16px 20px
- Min height: 48px
- Border radius: 12px

## Full Width

```tsx
<Button 
  title="Full Width Button" 
  fullWidth 
  onPress={() => {}} 
/>
```

## With Icons

### Left Icon

```tsx
import { Icon } from '@/src/components/ui';

<Button 
  title="With Icon" 
  icon={<Icon name="Plus" size={20} />}
  iconPosition="left"
  onPress={() => {}} 
/>
```

### Right Icon

```tsx
<Button 
  title="With Icon" 
  icon={<Icon name="ArrowRight" size={20} />}
  iconPosition="right"
  onPress={() => {}} 
/>
```

## Loading State

```tsx
<Button 
  title="Loading" 
  loading 
  onPress={() => {}} 
/>
```

Shows a spinner instead of text. Button is automatically disabled when loading.

## Disabled State

```tsx
<Button 
  title="Disabled" 
  disabled 
  onPress={() => {}} 
/>
```

## Complete Examples

### Button Group (Vertical)

```tsx
<View style={{ gap: 8 }}>
  <Button 
    title="Primary Button" 
    variant="primary" 
    fullWidth
    onPress={() => {}} 
  />
  <Button 
    title="Secondary Button" 
    variant="secondary" 
    fullWidth
    onPress={() => {}} 
  />
</View>
```

### Button Group (Horizontal)

```tsx
<View style={{ flexDirection: 'row', gap: 12 }}>
  <Button 
    title="Primary" 
    variant="primary" 
    size="medium"
    onPress={() => {}} 
  />
  <Button 
    title="Secondary" 
    variant="secondary" 
    size="medium"
    onPress={() => {}} 
  />
</View>
```

### With Custom Styling

```tsx
<Button 
  title="Custom" 
  variant="primary"
  style={{ marginTop: 20 }}
  textStyle={{ letterSpacing: 1 }}
  onPress={() => {}} 
/>
```

## Styling Details

### Primary Button
- **Background**: Linear gradient (brandPrimary → brandSecondary, 180deg)
- **Text**: White (#FFFFFF)
- **Font**: Urbanist SemiBold, 16px, 1.5em line height
- **Shadow**: iOS: 0px 4px 4px rgba(0,0,0,0.25), Android: elevation 4

### Secondary Button
- **Background**: White (#FFFFFF)
- **Text**: Dark (#333333)
- **Border**: 1px solid #999999
- **Font**: Urbanist SemiBold, 16px, 1.5em line height
- **Shadow**: iOS: 0px 0px 5px rgba(0,0,0,0.28) + 0px 4px 4px rgba(0,0,0,0.25), Android: elevation 5

## Best Practices

1. **Use primary for main actions** - Primary buttons should be used for the main call-to-action
2. **Use secondary for alternatives** - Secondary buttons for less important actions
3. **Consistent sizing** - Use the same size within a button group
4. **Loading states** - Always show loading state for async operations
5. **Disabled states** - Disable buttons when actions aren't available

## Based on Figma Design

This component is based on the Figma design:
- [Button Group Design](https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=58-1517)

The component supports all three orientations shown in the design:
- Vertical stack
- Horizontal side-by-side
- Compact horizontal

