import { View, Text, Pressable } from "react-native";
import React from "react";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      // navigation.dispatch(StackActions.pop());
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Pressable
            className="mr-5"
            onPressIn={() => onHeaderLeftPress(canGoBack)}
          >
            <Ionicons name={canGoBack ? "chevron-back" : "menu"} size={24} />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
