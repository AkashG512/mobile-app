import { BottomTabBar, type TabItem } from '@/src/components/layout';
import { Tabs, usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabsLayout() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  // Define tabs based on Figma design
  const tabs: TabItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: 'House',
      route: '/(tabs)/home',
    },
    {
      key: 'book-artist',
      label: 'Book Artist',
      icon: 'Sparkle',
      route: '/(tabs)/book-artist',
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: 'Widget',
      route: '/(tabs)/dashboard',
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: 'User',
      route: '/(tabs)/profile',
    },
  ];

  // Update active tab based on pathname
  useEffect(() => {
    const currentTab = tabs.find(tab => pathname?.includes(tab.route.split('/').pop() || ''));
    if (currentTab) {
      setActiveTab(currentTab.key);
    }
  }, [pathname]);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Tabs
        tabBar={(props) => (
          <BottomTabBar
            tabs={tabs}
            activeTab={activeTab}
            onTabPress={(key) => {
              setActiveTab(key);
              const tab = tabs.find(t => t.key === key);
              if (tab) {
                router.push(tab.route as any);
              }
            }}
          />
        )}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Hide default tab bar, we use custom one
        }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="book-artist"
        options={{
          title: 'Book Artist',
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

