import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // This is one of the libraries included with Expo
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";

interface Props {
  name: any;
  Component?:
    | "MaterialIcons"
    | "FontAwesome"
    | "Ionicons"
    | "MaterialCommunityIcons"
    | "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "Fontisto"
    | "Foundation"
    | "Octicons"
    | "SimpleLineIcons"
    | "Zocial";
  size?: number;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const IconButton = ({
  name,
  Component,
  size,
  color,
  disabled,
  onPress,
}: Props) => {
  const ComponentName = Component || "Ionicons";

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      {ComponentName === "MaterialIcons" && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {ComponentName === "FontAwesome" && (
        <FontAwesome name={name} size={size} color={color} />
      )}
      {ComponentName === "Ionicons" && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {ComponentName === "MaterialCommunityIcons" && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
      {ComponentName === "AntDesign" && (
        <AntDesign name={name} size={size} color={color} />
      )}
      {ComponentName === "Entypo" && (
        <Entypo name={name} size={size} color={color} />
      )}
      {ComponentName === "EvilIcons" && (
        <EvilIcons name={name} size={size} color={color} />
      )}
      {ComponentName === "Feather" && (
        <Feather name={name} size={size} color={color} />
      )}
      {ComponentName === "Fontisto" && (
        <Fontisto name={name} size={size} color={color} />
      )}
      {ComponentName === "Foundation" && (
        <Foundation name={name} size={size} color={color} />
      )}
      {ComponentName === "Octicons" && (
        <Octicons name={name} size={size} color={color} />
      )}
      {ComponentName === "SimpleLineIcons" && (
        <SimpleLineIcons name={name} size={size} color={color} />
      )}
      {ComponentName === "Zocial" && (
        <Zocial name={name} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 5, // Rounds the corners of the buttons
  },
});

export default IconButton;
