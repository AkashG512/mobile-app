import { Icon } from '@/src/components/ui';
import { DashboardIcon, GradientIcon } from '@/src/components/ui/GradientIcon';
import theme from '@/src/theme';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface TabItem {
  key: string;
  label: string;
  icon: string;
  route: string;
}

interface BottomTabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (tabKey: string) => void;
}

/**
 * Bottom Tab Bar component matching Figma design
 * Uses gradient colors from theme (brandPrimary to brandSecondary)
 * Based on: https://www.figma.com/design/B8CwvwSweTllrqpSCJXG5C/sowwrok?node-id=264-8227
 */
export function BottomTabBar({ tabs, activeTab, onTabPress }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => onTabPress(tab.key)}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <View style={styles.tabContent}>
                {tab.key === 'dashboard' ? (
                  <DashboardIcon size={28} active={isActive} />
                ) : (
                  <GradientIcon size={28} active={isActive}>
                    <Icon
                      name={tab.icon as any}
                      size={28}
                      color={theme.colors.textPrimary}
                      weight="fill"
                    />
                  </GradientIcon>
                )}
                {isActive ? (
                  <MaskedView
                    maskElement={
                      <Text style={[styles.activeLabel, { fontFamily: theme.fonts.semibold }]}>
                        {tab.label}
                      </Text>
                    }
                  >
                    <LinearGradient
                      colors={[theme.colors.brandPrimary, theme.colors.brandSecondary]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                    >
                      <Text style={[styles.activeLabel, { fontFamily: theme.fonts.semibold, opacity: 0 }]}>
                        {tab.label}
                      </Text>
                    </LinearGradient>
                  </MaskedView>
                ) : (
                  <Text style={[styles.inactiveLabel, { fontFamily: theme.fonts.semibold }]}>
                    {tab.label}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: -5, height: -9 },
        shadowOpacity: 0.32,
        shadowRadius: 10,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 20, // Match Figma: 0px 20px
    paddingVertical: 0, // No vertical padding in Figma
    gap: theme.spacing["2xl"], // 24px gap
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 66,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4, // Match Figma: 4px gap between icon and text
  },
  activeLabel: {
    fontSize: 12,
    lineHeight: 14.4, // 1.2em
    fontWeight: '600',
    color: theme.colors.white,
  },
  inactiveLabel: {
    fontSize: 12,
    lineHeight: 14.4, // 1.2em
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
});

