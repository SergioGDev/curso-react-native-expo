import { View, Text, ViewProps } from "react-native";
import React from "react";

interface Props extends ViewProps {
  className?: string;
}

const ThemeCard = ({ children, className }: Props) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
    >
      {children}
    </View>
  );
};

export default ThemeCard;
