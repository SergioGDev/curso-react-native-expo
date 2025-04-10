import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeTextInput from "@/presentation/theme/components/ThemeTextInput";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { router } from "expo-router";

const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, "background");
  const { register } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const onRegister = async () => {
    console.log({ ...form });
    const { email, password, fullName } = form;
    if (email.length === 0 || password.length === 0 || fullName.length === 0) {
      return;
    }
    setIsPosting(true);

    const wasSucessful = await register(email, password, fullName);
    setIsPosting(false);
    if (wasSucessful) {
      Alert.alert("Éxito", "Cuenta creada con éxito");
      router.replace("/");
      return;
    }
    Alert.alert("Error", "Error al crear la cuenta");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 40, backgroundColor }}>
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">Crear cuenta</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Por favor, crea una cuenta para continuar
          </ThemedText>
        </View>

        {/* Email y password */}
        <View style={{ marginTop: 20 }}>
          {/* Nombre completo */}
          <ThemeTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
            onChangeText={(value) => setForm({ ...form, fullName: value })}
          />

          {/* Correo electrónico */}
          <ThemeTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          {/* Correo electrónico */}
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
          onPress={onRegister}
          disabled={isPosting}
        >
          Crear cuenta
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
          <ThemedText>¿Ya tienes una cuenta?</ThemedText>
          <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
            Ingresar
          </ThemedLink>
        </View>

        {/* Enlace a registro */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
