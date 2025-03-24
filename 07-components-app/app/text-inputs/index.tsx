import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeTextInput from "@/presentation/shared/ThemeTextInput";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "height" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemeTextInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
            />
            <ThemeTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
            />
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className="my-4">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard
          // className={isIOS ? "mb-40" : "mb-2"}
          >
            <ThemeTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType="phone-pad"
            />
          </ThemeCard>

          {isIOS && <View className="h-28" />}
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
