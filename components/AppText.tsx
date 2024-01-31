import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

// Define App Tetx Props
interface Props {
  children: React.ReactNode;
  numberOfLines?: number;
  color?: string;
  size?: number;
  style?: TextStyle | TextStyle[] | {};
}

/**
 * A generic text component that can be reused throughout the app.
 * @param {Props} props - Props including children, style, color, size, and numberOfLines.
 * @returns {React.ReactNode} - A text component with customized styles.
 */
const AppText = ({
  children,
  style,
  color,
  size,
  numberOfLines,
  ...props
}: Props): React.ReactNode => {
  return (
    <Text
      style={[styles.text, { color, fontSize: size }, style]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

/**
 * A specialized text component for displaying English text.
 * Inherits properties from AppText.
 */
const English = ({
  children,
  style,
  color,
  size,
  numberOfLines,
  ...props
}: Props) => {
  return (
    <AppText
      style={[styles.english, style]}
      color={color}
      size={size}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </AppText>
  );
};

/**
 * A specialized text component for displaying Arabic text.
 * Inherits properties from AppText and applies a specific font family.
 */
const Arabic = ({
  children,
  style,
  color,
  size,
  numberOfLines,
  ...props
}: Props) => {
  return (
    <AppText
      style={[styles.arabic, style]}
      color={color}
      size={size}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </AppText>
  );
};

// Styles for the text components
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  arabic: {
    fontFamily: "ArabicRegular",
  },
  english: {
    fontFamily: "English",
  },
});

export default {
  AppText,
  Arabic,
  English,
};
