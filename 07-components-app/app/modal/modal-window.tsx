import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeButton from "@/presentation/shared/ThemeButton";
import { router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor={"#FF0042"}
    >
      <ThemeText>Hola, soy un modal</ThemeText>

      <ThemeButton
        className="mt-4"
        onPress={() => router.push("/modal/modal-window-2")}
      >
        Otro modal
      </ThemeButton>

      <ThemeButton className="mt-4" onPress={() => router.dismiss()}>
        Cerrar
      </ThemeButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
