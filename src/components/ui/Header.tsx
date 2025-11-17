import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";  
import { Icon } from "./Icon";  
import theme, { getTextStyle } from "@/src/theme";

const Header = () => {  
  return (  
    <View style={styles.container}>  
      {/* Location Section */}  
      <View style={styles.leftContainer}>  
        <Icon name="MapPin" size={32} color={theme.colors.textPrimary} weight="regular" />  
        <View style={styles.locationTextContainer}>  
          <Text style={styles.location} numberOfLines={1}>Near Phoenix Market City, White..</Text>  
          <Text style={styles.subLocation} numberOfLines={1}>Bengaluru - 560066</Text>  
        </View>  
      </View>  
  
      {/* Right Icons Section */}  
      <View style={styles.rightIcons}>  
        <TouchableOpacity style={{ marginRight: theme.spacing.l }}>  
          <Icon name="ShoppingCartSimple" size={32} color={theme.colors.textPrimary} weight="regular" />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Icon name="Bell" size={32} color={theme.colors.textPrimary} weight="regular" />  
        </TouchableOpacity>  
      </View>  
    </View>  
  );  
};  
  
const styles = StyleSheet.create({  
  container: {  
    flexDirection: "row",  
    justifyContent: "space-between",  
    alignItems: "center",  
    paddingHorizontal: theme.spacing.l,  
    paddingVertical: theme.spacing.m,  
    backgroundColor: theme.colors.white,
    gap: theme.spacing.m, // Added gap
  },  
  leftContainer: {  
    flexDirection: "row",  
    alignItems: "center",  
    flexShrink: 1, // Changed from flex: 1
  },  
  locationTextContainer: {  
    marginLeft: theme.spacing.s,  
    flexShrink: 1, // Allow text to shrink
  },  
  location: {  
    ...getTextStyle('m', 'semibold'),
    color: theme.colors.textPrimary,  
  },  
  subLocation: {  
    ...getTextStyle('m', 'regular'),
    color: theme.colors.textSecondary,  
  },  
  rightIcons: {  
    flexDirection: "row",  
    alignItems: "center",
    flexShrink: 0, // Prevent this container from shrinking
  },  
});  
  
export default Header;