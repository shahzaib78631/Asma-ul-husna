import React, { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useStyles from "@/hooks/useStyles";
import { Theme } from "@/types/theme";
import { AppContext } from "@/context/AppContext";

type SearchbarProps = {
  onChangeText: (text: string) => void;
  text: string;
};

const Searchbar = ({ onChangeText, text }: SearchbarProps) => {
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
        style={{ marginRight: 10 }}
      />
    </View>
  );
};

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
  });

export default Searchbar;
