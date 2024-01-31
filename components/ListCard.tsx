import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

// Importing components and context
import AppText from "./AppText";
import IconButton from "./IconButton";
import NumericCounter from "./NumericCounter";
import { AppContext } from "@/context/AppContext";

// Hooks
import useStyles from "@/hooks/useStyles";

// Types
import { Theme } from "@/types/theme";

interface ListCardProps {
  item: {
    id: string;
    english_roman: string;
    arabic: string;
    english_info: string;
  };
  isFav: boolean;
  onFavPress: (id: string) => void;
}

/**
 * A card component to display list items with various information and controls.
 *
 * @param {ListCardProps} props - The component props.
 * @param {object} props.item - The item to display, containing id, english_roman, arabic, and english_info.
 * @param {boolean} props.isFav - Whether the item is marked as a favorite.
 * @param {Function} props.onFavPress - Function to call when the favorite button is pressed.
 * @returns {React.ReactElement} - A view component representing a card in a list.
 */
const ListCard: React.FC<ListCardProps> = ({
  item,
  isFav,
  onFavPress,
}: ListCardProps): React.ReactElement => {
  const {
    themeStyles: theme,
    playingName,
    isPlaying,
    setPlayingName,
  } = useContext(AppContext);

  // Dynamic styles using the theme
  const styles = useStyles(stylesheet);

  // Toggles the playing state for the item
  const togglePlaying = () => {
    setPlayingName(playingName === item.id && isPlaying ? 0 : item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Play/Pause button */}
        <IconButton
          name={
            playingName === item.id && isPlaying
              ? "pause-outline"
              : "play-outline"
          }
          size={22}
          color={theme.accent}
          onPress={togglePlaying}
        />
        <View style={styles.spacer} />
        {/* Favorite button */}
        <IconButton
          name={isFav ? "heart" : "heart-outline"}
          size={20}
          library="MaterialCommunityIcons"
          color={theme.accent}
          onPress={() => onFavPress(item.id)}
        />
        {/* Numeric counter */}
        <View style={styles.countContainer}>
          <NumericCounter count={item.id} color={theme.accent} />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.info}>
        <View style={styles.leftContainer}>
          <View style={styles.nameHeader}>
            <View style={styles.englishNameContainer}>
              <AppText.English style={styles.english} numberOfLines={1}>
                {item.english_roman}
              </AppText.English>
            </View>
            <View style={styles.arabicNameContainer}>
              <AppText.Arabic style={styles.arabic}>
                {item.arabic}
              </AppText.Arabic>
            </View>
          </View>
          <AppText.English style={styles.englishInfo}>
            {item.english_info}.
          </AppText.English>
        </View>
      </View>
    </View>
  );
};

/**
 * Generates a stylesheet for a React Native component based on the given theme.
 *
 * @param {Theme} theme - The theme object that contains color and style properties.
 * @returns {StyleSheet.NamedStyles<any>} A StyleSheet object with styles based on the provided theme.
 */
const stylesheet = (theme: Theme): StyleSheet.NamedStyles<any> => {
  return StyleSheet.create({
    header: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    separator: {
      height: 0.5,
      width: "100%",
      backgroundColor: theme.background.white,
      marginVertical: 10,
    },
    container: {
      minHeight: 180,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.background.secondary,
      paddingHorizontal: 15,
      borderRadius: 6,
      // Note: borderCurve is not a standard style property in React Native.
      // If this is a custom property, ensure it is handled appropriately in your components.
      padding: 15,
      paddingTop: 10,
    },
    info: {
      flexDirection: "row",
    },
    countContainer: {
      width: 50,
      height: 50,
      marginLeft: "auto",
    },
    nameHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    leftContainer: {
      flex: 1,
      justifyContent: "center",
    },
    englishNameContainer: {
      alignItems: "flex-start",
      justifyContent: "center",
    },
    arabicNameContainer: {
      alignItems: "flex-end",
      justifyContent: "center",
    },
    arabic: {
      fontSize: 24,
      marginTop: 8,
      color: theme.text.primary,
    },
    countText: {
      fontSize: 24,
      color: theme.text.primary,
      textTransform: "capitalize",
    },
    english: {
      fontSize: 24,
      fontWeight: "600",
      color: theme.accent,
      textTransform: "capitalize",
    },
    englishInfo: {
      fontSize: 12,
      color: theme.text.secondary,
      textTransform: "capitalize",
    },
    spacer: {
      paddingHorizontal: 5,
    },
  });
};

export default ListCard;
