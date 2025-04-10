import {
  KeyboardAvoidingView,
  useWindowDimensions,
  View,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeTextInput from "@/presentation/theme/components/ThemeTextInput";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { router } from "expo-router";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const { login } = useAuthStore();
  const backgroundColor = useThemeColor({}, "background");

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    const { email, password } = form;
    console.log({ email, password });

    if (email.length === 0 || password.length === 0) {
      return;
    }

    setIsPosting(true);

    const wasSuccessful = await login(email, password);

    setIsPosting(false);
    if (wasSuccessful) {
      router.replace("/");
      return;
    }

    Alert.alert("Error", "Usuario o contraseña incorrectos");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 40, backgroundColor }}>
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText style={{ fontFamily: "KanitBold" }} type="title">
            Ingresar
          </ThemedText>

          <ThemedText style={{ color: "grey" }}>
            Por favor, ingrese para continuar
          </ThemedText>
        </View>

        {/* Email y password */}
        <View style={{ marginTop: 20 }}>
          {/* Correo electrónico */}
          <ThemeTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          {/* Contraseña */}
          <ThemeTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Botón */}
        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onLogin}
          disabled={isPosting}
        >
          Ingresar
        </ThemedButton>

        {/* Spacer */}
        <View style={{ marginTop: 50 }} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedText>¿No tienes cuenta?</ThemedText>
          <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
            Crear cuenta
          </ThemedLink>
        </View>

        {/* Enlace a registro */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
