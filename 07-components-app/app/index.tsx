import { View } from "react-native";
import React from "react";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import MenuItem from "@/presentation/menu/MenuItem";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-3" />

      {uiMenuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}

      <View className="my-3" />

      {menuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
