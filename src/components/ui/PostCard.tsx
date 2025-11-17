import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@/src/components/ui/Icon";
import theme, { getTextStyle } from "@/src/theme";

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
          <Text style={styles.subText} numberOfLines={1}>
            {role} - {location}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon 
            name="DotsThreeVertical" 
            size={28} 
            color={theme.colors.textPrimary} 
            weight="bold" 
          />
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
          name="Smiley"
          size={28}
          color={theme.colors.textPrimary}
          weight="regular"
          style={styles.icon}
        />
        <Icon
          name="ChatCircle"
          size={28}
          color={theme.colors.textPrimary}
          weight="regular"
          style={styles.icon}
        />
        <Icon
          name="PaperPlaneTilt"
          size={28}
          color={theme.colors.textPrimary}
          weight="regular"
          style={styles.icon}
        />
        <Icon
          name="BookmarkSimple"
          size={28}
          color={theme.colors.textPrimary}
          weight="regular"
          style={styles.iconRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.s,
    paddingHorizontal: theme.spacing.m,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: theme.spacing.s,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: theme.spacing.s,
  },
  name: {
    ...getTextStyle("m", "semibold"),
    color: theme.colors.textPrimary,
  },
  subText: {
    ...getTextStyle("s", "regular"),
    color: theme.colors.textSecondary,
  },
  description: {
    ...getTextStyle("m", "regular"),
    color: theme.colors.textPrimary,
  },
  readMore: {
    ...getTextStyle("s", "regular"),
    color: theme.colors.brandPrimary,
  },
  time: { 
    ...getTextStyle("xs", "regular"),
    color: theme.colors.textSecondary, 
    marginTop: theme.spacing["2xs"] 
  },
  mainImage: { 
    width: "100%", 
    height: 430, 
    borderRadius: theme.borderRadius.m, 
    marginTop: theme.spacing.s 
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: theme.spacing.s,
  },
  icon: { 
    marginLeft: theme.spacing.m 
  },
  iconRight: { 
    marginLeft: "auto" 
  },
});

export default PostCard;