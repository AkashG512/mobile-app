# Navigation & Safe Area Setup

This document explains the navigation structure and safe area implementation in the app.

## Navigation Structure

```
app/
├── _layout.tsx          # Root layout with SafeAreaProvider
├── index.tsx            # Entry point (redirects to tabs)
└── (tabs)/
    ├── _layout.tsx      # Tabs layout with BottomTabBar
    ├── home/
    ├── book-artist/
    ├── dashboard/
    └── profile/
```

## Safe Area Implementation

### 1. Root Layout (`app/_layout.tsx`)

The root layout wraps the entire app with `SafeAreaProvider`:

```tsx
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack>
        {/* Routes */}
      </Stack>
    </SafeAreaProvider>
  );
}
```

### 2. SafeAreaContainer Component

A reusable component for screens that need safe area handling:

```tsx
import { SafeAreaContainer } from '@/src/components/layout';

export default function MyScreen() {
  return (
    <SafeAreaContainer edges={['top', 'left', 'right']}>
      {/* Your content */}
    </SafeAreaContainer>
  );
}
```

**Available edges:**
- `'top'` - Top safe area (notch, status bar)
- `'bottom'` - Bottom safe area (home indicator)
- `'left'` - Left safe area
- `'right'` - Right safe area

### 3. Bottom Tab Bar

The `BottomTabBar` automatically handles bottom safe area insets:

```tsx
const insets = useSafeAreaInsets();
// Automatically adds padding for bottom safe area
```

### 4. Tab Screens

All tab screens use `SafeAreaContainer` with top, left, and right edges:

```tsx
<SafeAreaContainer edges={['top', 'left', 'right']}>
  <ScrollView>
    {/* Content */}
  </ScrollView>
</SafeAreaContainer>
```

**Note:** Bottom edge is handled by the tab bar, so screens don't need it.

## Navigation Flow

1. **Entry Point** (`app/index.tsx`)
   - Redirects to `/(tabs)/home` by default
   - Add authentication/onboarding logic here if needed

2. **Tabs Layout** (`app/(tabs)/_layout.tsx`)
   - Manages tab navigation
   - Handles active tab state
   - Renders custom `BottomTabBar`

3. **Tab Screens**
   - Each tab is a separate screen
   - Use `SafeAreaContainer` for proper safe area handling
   - Use `ScrollView` for scrollable content

## Using Safe Areas in Custom Components

### Option 1: SafeAreaContainer (Recommended)

```tsx
import { SafeAreaContainer } from '@/src/components/layout';

<SafeAreaContainer edges={['top']}>
  <YourContent />
</SafeAreaContainer>
```

### Option 2: useSafeArea Hook

```tsx
import { useSafeArea } from '@/src/components/layout';

function MyComponent() {
  const insets = useSafeArea();
  
  return (
    <View style={{ paddingTop: insets.top }}>
      {/* Content */}
    </View>
  );
}
```

### Option 3: Direct useSafeAreaInsets

```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyComponent() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Content */}
    </View>
  );
}
```

## Navigation Helpers

### Navigating Between Tabs

Navigation is handled automatically by the `BottomTabBar`:

```tsx
// In BottomTabBar, navigation is handled via:
router.push(tab.route);
```

### Programmatic Navigation

```tsx
import { useRouter } from 'expo-router';

function MyComponent() {
  const router = useRouter();
  
  // Navigate to a tab
  router.push('/(tabs)/home');
  router.push('/(tabs)/profile');
  
  // Navigate back
  router.back();
  
  // Replace current screen
  router.replace('/(tabs)/dashboard');
}
```

### Getting Current Route

```tsx
import { usePathname } from 'expo-router';

function MyComponent() {
  const pathname = usePathname();
  // Returns: '/(tabs)/home', '/(tabs)/profile', etc.
}
```

## Best Practices

1. **Always use SafeAreaContainer** for full-screen content
2. **Don't add bottom padding** in tab screens (handled by tab bar)
3. **Use ScrollView** for scrollable content within SafeAreaContainer
4. **Test on devices** with notches and home indicators
5. **Handle keyboard** separately if needed (use KeyboardAvoidingView)

## Testing Safe Areas

To test safe areas:

1. **iOS Simulator**: Use devices with notches (iPhone X and later)
2. **Android Emulator**: Use devices with gesture navigation
3. **Physical Devices**: Test on real devices with different screen sizes

## Common Patterns

### Full Screen with Safe Areas

```tsx
<SafeAreaContainer edges={['top', 'left', 'right', 'bottom']}>
  <YourContent />
</SafeAreaContainer>
```

### Screen with Tab Bar (Most Common)

```tsx
<SafeAreaContainer edges={['top', 'left', 'right']}>
  <ScrollView>
    <YourContent />
  </ScrollView>
</SafeAreaContainer>
```

### Custom Padding

```tsx
import { useSafeArea } from '@/src/components/layout';

function MyComponent() {
  const insets = useSafeArea();
  
  return (
    <View style={{ 
      paddingTop: insets.top + 20, // Safe area + custom padding
      paddingBottom: insets.bottom + 10 
    }}>
      <YourContent />
    </View>
  );
}
```

## Troubleshooting

### Content Hidden Behind Notch
- Ensure `SafeAreaContainer` has `edges={['top']}`
- Check that root layout has `SafeAreaProvider`

### Tab Bar Overlapping Content
- Tab bar handles bottom safe area automatically
- Don't add bottom padding in tab screens

### Inconsistent Safe Areas
- Always use `SafeAreaProvider` at root
- Use `SafeAreaContainer` or `useSafeAreaInsets` consistently

