/**
 * Example component showing how to use icons with the theme system
 * This is a reference file - you can delete it or use it as a template
 */

import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from './Icon';
import theme, { getTextStyle, getHeadingStyle } from '@/src/theme';

export function ExampleIconUsage() {
  return (
    <View style={{ padding: theme.spacing.l }}>
      {/* Icon with heading */}
      <View style={{ marginBottom: theme.spacing.xl }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon 
            name="House" 
            size={32} 
            color={theme.colors.brandPrimary} 
            weight="fill"
          />
          <Text style={getHeadingStyle('xl')}>
            Welcome Home
          </Text>
        </View>
      </View>

      {/* Icon buttons */}
      <View style={{ flexDirection: 'row', gap: theme.spacing.m, marginBottom: theme.spacing.xl }}>
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

        <TouchableOpacity
          style={{
            padding: theme.spacing.m,
            borderRadius: theme.borderRadius.m,
            backgroundColor: theme.colors.lightGrey,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="Share" size={24} color={theme.colors.brandPrimary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: theme.spacing.m,
            borderRadius: theme.borderRadius.m,
            backgroundColor: theme.colors.lightGrey,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="Bell" size={24} color={theme.colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Icon with text */}
      <View style={{ gap: theme.spacing.m }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon name="User" size={20} color={theme.colors.textSecondary} />
          <Text style={getTextStyle('m', 'regular')}>
            Profile Settings
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon name="Gear" size={20} color={theme.colors.textSecondary} />
          <Text style={getTextStyle('m', 'regular')}>
            App Settings
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon name="Info" size={20} color={theme.colors.brandPrimary} />
          <Text style={getTextStyle('m', 'semibold')}>
            Important Information
          </Text>
        </View>
      </View>

      {/* Status icons */}
      <View style={{ marginTop: theme.spacing.xl, gap: theme.spacing.m }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon name="CheckCircle" size={24} color={theme.colors.green} weight="fill" />
          <Text style={getTextStyle('l', 'regular')}>
            Success message
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s }}>
          <Icon name="Warning" size={24} color={theme.colors.red} weight="fill" />
          <Text style={getTextStyle('l', 'regular')}>
            Warning message
          </Text>
        </View>
      </View>
    </View>
  );
}

