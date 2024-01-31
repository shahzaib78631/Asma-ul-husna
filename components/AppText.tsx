import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  numberOfLines?: number;
  color?: string;
  size?: number;
  style?: TextStyle | TextStyle[] | {};
}

const AppText = ({
  children,
  style,
  color,
  size,
  numberOfLines,
  ...props
}: Props) => {
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
      numberOfLines={numberOfLines}
      color={color}
      size={size}
      {...props}
    >
      {children}
    </AppText>
  );
};

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
      numberOfLines={numberOfLines}
      size={size}
      color={color}
      {...props}
    >
      {children}
    </AppText>
  );
};

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
