# Bottom Tab Bar Usage Guide

This guide shows you how to use the Bottom Tab Bar component that matches your Figma design.

## Overview

The Bottom Tab Bar component is based on your Figma design:
- **Design**: [Figma Link](https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=128-3573)
- **Gradient Colors**: Uses theme colors `brandPrimary` (#4eb0ff) to `brandSecondary` (#8063ff)
- **Icons**: Uses Phosphor icons (House, Star, Widget, User)
- **Active State**: Gradient text color and filled icon
- **Inactive State**: Black text and regular icon

## Component Location

- **Component**: `src/components/layout/BottomTabBar.tsx`
- **Exported from**: `src/components/layout/index.ts`

## Basic Usage

```tsx
import { BottomTabBar, type TabItem } from '@/src/components/layout';
import { useState } from 'react';

export default function MyScreen() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs: TabItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: 'House',
      route: '/home',
    },
    {
      key: 'book-artist',
      label: 'Book Artist',
      icon: 'Star',
      route: '/book-artist',
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: 'Widget',
      route: '/dashboard',
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: 'User',
      route: '/profile',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Your screen content */}
      <BottomTabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={(key) => {
          setActiveTab(key);
          // Navigate to the route
        }}
      />
    </View>
  );
}
```

## With Expo Router

The component is already integrated in `app/(tabs)/_layout.tsx`:

```tsx
import { Tabs } from 'expo-router';
import { BottomTabBar, type TabItem } from '@/src/components/layout';

export default function TabsLayout() {
  const tabs: TabItem[] = [
    { key: 'home', label: 'Home', icon: 'House', route: '/(tabs)/home' },
    { key: 'book-artist', label: 'Book Artist', icon: 'Star', route: '/(tabs)/book-artist' },
    { key: 'dashboard', label: 'Dashboard', icon: 'Widget', route: '/(tabs)/dashboard' },
    { key: 'profile', label: 'Profile', icon: 'User', route: '/(tabs)/profile' },
  ];

  return (
    <Tabs
      tabBar={(props) => (
        <BottomTabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={(key) => {
            const tab = tabs.find(t => t.key === key);
            if (tab) {
              props.navigation.navigate(tab.route);
            }
          }}
        />
      )}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="book-artist" />
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
```

## Tab Item Structure

```typescript
interface TabItem {
  key: string;        // Unique identifier for the tab
  label: string;      // Display text (e.g., "Home", "Profile")
  icon: string;       // Phosphor icon name (e.g., "House", "User")
  route: string;      // Navigation route
}
```

## Available Icons

The component uses Phosphor icons. Common icons you can use:

- `House` - Home
- `Star` - Book Artist / Favorites
- `Widget` - Dashboard / Settings
- `User` - Profile
- `MagnifyingGlass` - Search
- `Bell` - Notifications
- `Heart` - Favorites
- `Gear` - Settings

See `ICONS_GUIDE.md` for a complete list of available icons.

## Styling Details

The component matches the Figma design:

- **Container**: White background with shadow
- **Tab Size**: 66x66px
- **Icon Size**: 28x28px
- **Text Size**: 12px
- **Active Text**: Gradient (brandPrimary → brandSecondary), weight 600
- **Inactive Text**: Black (#000000), weight 500
- **Gap**: 24px between tabs
- **Padding**: 20px horizontal

## Gradient Colors

The gradient uses theme colors:
- **Start**: `theme.colors.brandPrimary` (#4eb0ff)
- **End**: `theme.colors.brandSecondary` (#8063ff)
- **Direction**: Vertical (180deg)

These colors are automatically pulled from your theme file.

## Customization

To customize the component, edit `src/components/layout/BottomTabBar.tsx`:

```tsx
// Change icon size
<Icon
  name={tab.icon as any}
  size={32} // Change from 28 to 32
  ...
/>

// Change tab size
tabItem: {
  width: 80,  // Change from 66
  height: 80, // Change from 66
}
```

## Troubleshooting

### Gradient text not showing
- Ensure `expo-linear-gradient` and `@react-native-masked-view/masked-view` are installed
- Check that the MaskedView import is correct (default import)

### Icons not displaying
- Verify the icon name matches Phosphor icon names exactly (case-sensitive)
- Check that `phosphor-react-native` is installed

### Navigation not working
- Ensure you're handling the `onTabPress` callback correctly
- Check that routes match your navigation structure

## Example Screens

The following screens are already set up:
- `app/(tabs)/home/index.tsx`
- `app/(tabs)/book-artist/index.tsx`
- `app/(tabs)/dashboard/index.tsx`
- `app/(tabs)/profile/index.tsx`

You can customize these screens as needed.

