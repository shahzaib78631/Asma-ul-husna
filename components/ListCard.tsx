import { StyleSheet, View, Text, ListRenderItem } from "react-native";
import React, { useContext } from "react";

// Components
import AppText from "./AppText";
import IconButton from "./IconButton";
import NumericCounter from "./NumericCounter";

// AppContext
import { AppContext } from "@/context/AppContext";

// Styles
import useStyles from "@/hooks/useStyles";

// Type
import { Theme } from "@/types/theme";

interface ListCardProps {
  item: {
    key: string;
    english_roman: string;
    arabic: string;
    english_info: string;
  };
  isFav: boolean;
  onFavPress: any;
}

const ListCard: React.FC<ListCardProps> = ({ item, isFav, onFavPress }) => {
  const {
    themeStyles: theme,
    playingName,
    isPlaying,
    setPlayingName,
  } = useContext(AppContext);

  // Styles
  const styles = useStyles(stylesheet);

  const togglePlaying = () => {
    if (playingName === item?.key && isPlaying) {
      setPlayingName(0);
    } else {
      setPlayingName(item?.key);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          name={
            playingName === item?.key && isPlaying
              ? "pause-outline"
              : "play-outline"
          }
          size={22}
          color={theme.accent}
          onPress={togglePlaying}
        />
        <View style={styles.spacer} />
        <IconButton
          name={isFav ? "heart" : "heart-outline"}
          size={20}
          Component="MaterialCommunityIcons"
          color={theme.accent}
          onPress={() => onFavPress(item?.key)}
        />
        <View style={styles.countContainer}>
          <NumericCounter count={item?.key} color={theme.accent} />
        </View>
      </View>
      <View style={styles.seperator} />
      <View style={styles.info}>
        <View style={styles.leftContainer}>
          <View style={styles.nameHeader}>
            <View style={styles.englishNameContainer}>
              <AppText.English style={styles.english} numberOfLines={1}>
                {item?.english_roman}
              </AppText.English>
            </View>
            <View style={styles.arabicNameContainer}>
              <AppText.Arabic style={styles.arabic}>
                {item?.arabic}
              </AppText.Arabic>
            </View>
          </View>
          <AppText.English style={styles.englishInfo}>
            {item?.english_info}.
          </AppText.English>
        </View>
      </View>
    </View>
  );
};

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    header: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    seperator: {
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
      borderCurve: "continuous",
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

export default ListCard;
