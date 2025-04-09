import { Stack } from "expo-router";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="modal-window-2"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
