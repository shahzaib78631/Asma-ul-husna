import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import * as Icons from "@expo/vector-icons";

// Props for the IconButton component
interface Props {
  name: string;
  library?:
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

/**
 * A customizable icon button component using various icon libraries from @expo/vector-icons.
 *
 * @param {Props} props - The component props.
 * @param {string} props.name - The icon name.
 * @param {string} [props.library='Ionicons'] - The icon library to use. Defaults to Ionicons.
 * @param {number} [props.size] - The size of the icon.
 * @param {string} [props.color] - The color of the icon.
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled.
 * @param {Function} [props.onPress] - Function to call when the button is pressed.
 * @returns {React.ReactElement} - A touchable icon component.
 */
const IconButton = ({
  name,
  library = "Ionicons",
  size,
  color,
  disabled = false,
  onPress,
}: Props): React.ReactElement => {
  const IconComponent: any = Icons[library];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5, // Rounded corners
  },
});

export default IconButton;
