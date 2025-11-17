import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";  
import { Icon } from "./Icon";  
  
const Header = () => {  
  return (  
    <View style={styles.container}>  
      {/* Location Section */}  
      <View style={styles.leftContainer}>  
        <Icon name="MapPin" size={22} color="#000" weight="regular" />  
        <View style={styles.locationTextContainer}>  
          <Text style={styles.location}>Near Phoenix Market City, Whitefield</Text>  
          <Text style={styles.subLocation}>Bengaluru - 560066</Text>  
        </View>  
      </View>  
  
      {/* Right Icons Section */}  
      <View style={styles.rightIcons}>  
        <TouchableOpacity style={{ marginRight: 18 }}>  
          <Icon name="ShoppingCartIcon" size={22} color="#000" weight="regular" />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Icon name="Bell" size={24} color="#000" weight="regular" />  
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
    paddingHorizontal: 16,  
    paddingVertical: 10,  
    backgroundColor: "#fff",  
  },  
  leftContainer: {  
    flexDirection: "row",  
    alignItems: "center",  
    flex: 1,  
  },  
  locationTextContainer: {  
    marginLeft: 8,  
    flexShrink: 1,  
  },  
  location: {  
    fontSize: 13,  
    fontWeight: "500",  
    color: "#000",  
  },  
  subLocation: {  
    fontSize: 11,  
    color: "gray",  
  },  
  rightIcons: {  
    flexDirection: "row",  
    alignItems: "center",  
  },  
});  
  
export default Header;  
