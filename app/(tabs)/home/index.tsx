import React from "react";  
import { ScrollView, View, Image, StyleSheet } from "react-native";  
import Header from "@/src/components/ui/Header";  
import PostCard from "../../../src/components/ui/PostCard";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "@/src/theme";

const HomeScreen = () => {  
  return ( 
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>  
      <Header />  
  
      {/* Banner 
      <View style={styles.bannerContainer}>  
        <Image  
          source={{ uri: "https://picsum.photos/200/100" }}  
          style={styles.banner}  
        />  
      </View>  
      */}
  
      {/* Feed Section */}  
      <PostCard  
        name="Sim@065"  
        handle="sim065"  
        role="Individual - Singer"  
        location="Koramangala, Bangalore"  
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."  
        image={{ uri: "https://picsum.photos/400/300" }}  
        avatar={{ uri: "https://picsum.photos/200" }}  
      />  
  
      <PostCard  
        name="Ray@987"  
        handle="ray987"  
        role="Individual - Guitarist"  
        location="Mumbai, Maharashtra"  
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."  
        image={{ uri: "https://picsum.photos/401/300" }}  
        avatar={{ uri: "https://picsum.photos/201" }}  
      />  
  
      <PostCard  
        name="Sim@065"  
        handle="sim065"  
        role="Individual - Singer"  
        location="Koramangala, Bangalore"  
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."  
        image={{ uri: "https://picsum.photos/402/300" }}  
        avatar={{ uri: "https://picsum.photos/202" }}  
      />  
    </ScrollView>  
    </SafeAreaView>
  );  

};  
  
const styles = StyleSheet.create({  
  container: { flex: 1, backgroundColor: theme.colors.white },  
  bannerContainer: { 
    marginHorizontal: theme.spacing.l, 
    marginTop: theme.spacing.m 
  },  
  banner: { 
    width: "100%", 
    height: 100, 
    borderRadius: theme.borderRadius.m 
  },  
});  
  
export default HomeScreen;