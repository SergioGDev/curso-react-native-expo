import React from "react";
import { Text, Pressable, PressableProps, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends PressableProps {
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedButton = ({ icon, children, style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? primaryColor + "90" : primaryColor },
        styles.button,
      ]}
      {...rest}
    >
      <Text style={{ color: "white" }}>{children}</Text>
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
