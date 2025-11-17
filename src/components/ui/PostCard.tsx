import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@/src/components/ui/Icon";

interface Props {
  name: string;
  handle: string;
  role: string;
  location: string;
  description: string;
  image: any;
  avatar: any;
}

const PostCard: React.FC<Props> = ({
  name,
  handle,
  role,
  location,
  description,
  image,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subText}>
            {role} - {location}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="DotsThree" size={18} color="#000" weight="regular" />
        </TouchableOpacity>
      </View>

      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
      <Text style={styles.readMore}>Read more</Text>
      <Text style={styles.time}>5 mins ago</Text>

      <Image source={image} style={styles.mainImage} />

      <View style={styles.actions}>
        <Icon
          name="ChatCircle"
          size={20}
          color="#000"
          weight="regular"
          style={styles.icon}
        />
        <Icon
          name="PaperPlane"
          size={20}
          color="#000"
          weight="regular"
          style={styles.icon}
        />
        <Icon
          name="Bookmark"
          size={20}
          color="#000"
          weight="regular"
          style={styles.iconRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 14,
  },
  subText: {
    fontSize: 11,
    color: "gray",
  },
  description: {
    fontSize: 13,
    color: "#222",
  },
  readMore: {
    color: "#007aff",
    fontSize: 12,
  },
  time: { color: "gray", fontSize: 10, marginTop: 2 },
  mainImage: { width: "100%", height: 220, borderRadius: 12, marginTop: 6 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  icon: { marginLeft: 14 },
  iconRight: { marginLeft: "auto" },
});

export default PostCard;
