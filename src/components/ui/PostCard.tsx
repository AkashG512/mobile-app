import React, { useState, useRef, useCallback } from "react"; // 1. Import useCallback
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@/src/components/ui/Icon";
import theme, { getTextStyle } from "@/src/theme";
import { CommentBottomSheet, type CommentBottomSheetMethods } from "./CommentBottomSheet"; 

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
  const [isExpanded, setIsExpanded] = useState(false);
  const commentSheetRef = useRef<CommentBottomSheetMethods>(null);

  // 2. Wrap the function in useCallback
  const handleOpenComments = useCallback(() => {
    commentSheetRef.current?.present();
  }, []); // Add an empty dependency array

  return (
    <>
      <View style={styles.container}>
        {/* ... (rest of the header) ... */}
        <View style={styles.header}>
          <Image source={avatar} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.subText} numberOfLines={1}>
              {role} - {location}
            </Text>
          </View>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Icon 
              name="DotsThreeVertical" 
              size={28} 
              color={theme.colors.textPrimary} 
              weight="bold" 
            />
          </TouchableOpacity>
        </View>

        <Text numberOfLines={isExpanded ? undefined : 2} style={styles.description}>
          {description}
        </Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} activeOpacity={0.7}>
          <Text style={styles.readMore}>
            {isExpanded ? 'Read less' : 'Read more'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.time}>5 mins ago</Text>

        <Image source={image} style={styles.mainImage} />

        <View style={styles.actions}>
          {/* Left Actions */}
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Icon
                name="Smiley"
                size={28}
                color={theme.colors.textPrimary}
                weight="regular"
              />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton} 
              activeOpacity={0.7}
              onPress={handleOpenComments} // This will now use the memoized function
            >
              <Icon
                name="ChatCircle"
                size={28}
                color={theme.colors.textPrimary}
                weight="regular"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Icon
                name="PaperPlaneTilt"
                size={28}
                color={theme.colors.textPrimary}
                weight="regular"
              />
            </TouchableOpacity>
          </View>
          
          {/* Right Action */}
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Icon
              name="BookmarkSimple"
              size={28}
              color={theme.colors.textPrimary}
              weight="regular"
            />
          </TouchableOpacity>
        </View>
      </View>

      <CommentBottomSheet ref={commentSheetRef} />
    </>
  );
};

// Styles remain the same
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
    paddingTop: theme.spacing.xs,
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
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: theme.spacing.s,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m, // Gap between left icons
  },
  iconButton: {
    // Consistent touch target for all icons
    padding: theme.spacing.xs,
  },
});

export default PostCard;