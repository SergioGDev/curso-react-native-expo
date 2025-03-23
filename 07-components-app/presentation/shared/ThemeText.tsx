import React from "react";
import { View, Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemeText = ({
  type = "normal",
  className,
  children,
  ...rest
}: Props) => {
  const fontType = () => {
    switch (type) {
      case "normal":
        return "font-normal";
      case "h1":
        return "text-3xl";
      case "h2":
        return "text-xl";
      case "semi-bold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "link":
        return "underline font-normal";
    }
  };

  return (
    <Text
      className={[
        "color-light-text dark:text-dark-text",
        fontType(),
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
