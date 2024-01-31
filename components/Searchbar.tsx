import React, { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";

// CIcons
import { Ionicons } from "@expo/vector-icons";

// Theme types
import { Theme } from "@/types/theme";

// Context
import { AppContext } from "@/context/AppContext";

// Styles hook
import useStyles from "@/hooks/useStyles"; // Custom hook for applying styles

// Props for Searchbar Component
type SearchbarProps = {
  onChangeText: (text: string) => void;
  text: string;
};

/**
 * A custom search bar component.
 *
 * @param {SearchbarProps} props - The component props.
 * @param {function} props.onChangeText - Function to call when the text changes.
 * @param {string} props.text - The current text value of the search bar.
 * @returns {React.ReactElement} - A view component representing a search bar.
 */
const Searchbar = ({
  onChangeText,
  text,
}: SearchbarProps): React.ReactElement => {
  const { themeStyles } = useContext(AppContext);
  const styles = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={themeStyles.text.secondary}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
      />
      <Ionicons
        name="search"
        size={24}
        color={themeStyles.accent}
        style={styles.icon}
      />
    </View>
  );
};

// Stylesheet function using the provided theme
const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      borderRadius: 10,
      backgroundColor: "transparent",
      borderWidth: 3,
      borderColor: theme.background.secondary,
      padding: 10,
    },
    textInput: {
      flex: 1,
      color: theme.text.primary,
      fontFamily: "English",
      fontSize: 16,
    },
    icon: {
      marginRight: 10,
    },
  });

export default Searchbar;
