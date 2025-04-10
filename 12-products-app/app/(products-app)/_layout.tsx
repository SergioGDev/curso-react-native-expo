import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect, Stack } from "expo-router";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import LogoutIconButton from "../../presentation/auth/components/LogoutIconButton";

const CheckAuthenticationLayout = () => {
  const backgroundColor = useThemeColor({}, "background");
  const { status, checkStatus } = useAuthStore();
  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === "unauthenticated") {
    // TODO: Guardar la ruta del usuario en el storage para regresar a la pantalla después del login
    return <Redirect href={"/auth/login"} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        contentStyle: { backgroundColor },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Products",
          headerLeft: () => <LogoutIconButton />,
        }}
      />
    </Stack>
  );
};

export default CheckAuthenticationLayout;
