import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 pt-5">
        <CustomButton
          color="primary"
          className="mb-2"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          className="mb-2"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>
        <CustomButton
          color="tertiary"
          className="mb-2"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-8" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir el menú</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
