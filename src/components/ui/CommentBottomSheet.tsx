import React, {
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import theme, { getTextStyle, getHeadingStyle } from '@/src/theme';
import { Icon } from './Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ... (mockComments and interface are the same) ...
const mockComments = [
  {
    id: '1',
    name: 'Jane Doe',
    avatar: 'https://picsum.photos/200',
    comment: 'This looks amazing! Great work.',
  },
  {
    id: '2',
    name: 'John Smith',
    avatar: 'https://picsum.photos/201',
    comment: 'I was wondering when you would post this. 🔥',
  },
  {
    id: '3',
    name: 'Alex Johnson',
    avatar: 'https://picsum.photos/202',
    comment: 'Incredible!',
  },
  {
    id: '4',
    name: 'Chris Lee',
    avatar: 'https://picsum.photos/203',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export interface CommentBottomSheetMethods {
  present: () => void;
  dismiss: () => void;
}

export const CommentBottomSheet = forwardRef<CommentBottomSheetMethods>((props, ref) => {
  const [comment, setComment] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom: safeAreaBottom } = useSafeAreaInsets();

  const snapPoints = useMemo(() => ['50%', '85%'], []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
    dismiss: () => {
      bottomSheetModalRef.current?.dismiss();
    },
  }));

  const handlePostComment = useCallback(() => {
    if (!comment.trim()) return;
    console.log('Posting comment:', comment);
    setComment('');
  }, [comment]);

  const renderFooter = useCallback(
    () => (
      <View 
        style={[
          styles.inputContainer, 
          // This padding will now work thanks to SafeAreaProvider
          { paddingBottom: safeAreaBottom > 0 ? safeAreaBottom : theme.spacing.m }
        ]}
      >
        <BottomSheetTextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Write a comment..."
          placeholderTextColor={theme.colors.textSecondary}
          style={styles.input}
        />
        <TouchableOpacity 
          onPress={handlePostComment} 
          disabled={!comment.trim()}
          style={styles.sendButton}
        >
          <Icon
            name="PaperPlaneTilt"
            size={24}
            color={!comment.trim() ? theme.colors.textSecondary : theme.colors.brandPrimary}
            weight="regular"
          />
        </TouchableOpacity>
      </View>
    ),
    [comment, handlePostComment, safeAreaBottom]
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.gripper}
      backgroundStyle={styles.sheetContainer}
      footerComponent={renderFooter}
      // Keyboard handling should be provided by wrapping the app with BottomSheetModalProvider
    >
      <Text style={styles.title}>Comments ({mockComments.length})</Text>
      
      <BottomSheetScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {mockComments.map((item) => (
          <View key={item.id} style={styles.comment}>
            <Image source={{ uri: item.avatar }} style={styles.commentAvatar} />
            <View style={styles.commentBody}>
              <Text style={styles.commentName}>{item.name}</Text>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          </View>
        ))}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

// Styles are updated slightly for the padding logic
const styles = StyleSheet.create({
  // ... (other styles are the same) ...
  sheetContainer: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadius['2xl'],
    borderTopRightRadius: theme.borderRadius['2xl'],
  },
  gripper: {
    backgroundColor: theme.colors.grey,
    width: 48,
    height: 5,
  },
  title: {
    ...getHeadingStyle('s'),
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.l,
    textAlign: 'center',
    paddingTop: theme.spacing.s,
  },
  scrollView: {
    paddingHorizontal: theme.spacing.xl,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: theme.spacing.l,
    gap: theme.spacing.m,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentBody: {
    flex: 1,
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
  },
  commentName: {
    ...getTextStyle('m', 'semibold'),
    color: theme.colors.textPrimary,
  },
  commentText: {
    ...getTextStyle('m', 'regular'),
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.m, 
    // Removed fixed paddingBottom, it's now handled inline
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGrey,
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.lightGrey,
    borderRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.m,
    // Using platform-specific padding for better text alignment
    paddingVertical: Platform.OS === 'ios' ? theme.spacing.m : theme.spacing.s,
    ...getTextStyle('m', 'regular'),
    color: theme.colors.textPrimary,
  },
  sendButton: {
    padding: theme.spacing.s,
  },
});