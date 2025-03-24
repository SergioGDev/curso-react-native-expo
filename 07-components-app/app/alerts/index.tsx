import React from "react";
import ThemedView from "@/presentation/shared/ThemedView";
import { StyleSheet, Button, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ThemeButton from "@/presentation/shared/ThemeButton";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemedView margin className="flex-1 justify-start items-center gap-4 mt-4">
      <ThemeButton className="w-full py-4" onPress={createTwoButtonAlert}>
        2-Button Alert
      </ThemeButton>
      <ThemeButton className="w-full py-4" onPress={createThreeButtonAlert}>
        3-Button Alert
      </ThemeButton>
    </ThemedView>
  );
};

export default AlertsScreen;
