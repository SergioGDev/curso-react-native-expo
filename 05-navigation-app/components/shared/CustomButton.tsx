import { Text, Pressable, PressableProps, View } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary-100",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    if (variant === "text-only") {
      return (
        <Pressable
          ref={ref}
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        ref={ref}
        className={`p-3 rounded-md ${btnColor} active:opacity-80 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className="text-white font-work-medium text-center">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
