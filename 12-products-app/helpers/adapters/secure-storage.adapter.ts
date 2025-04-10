import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export class SecureStorageAdapter {
  static async setItem(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert("Error", "Error saving to secure storage");
      console.error("Error saving to secure storage", error);
    }
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      const value = await SecureStore.getItemAsync(key);
      return value;
    } catch (error) {
      Alert.alert("Error", "Error retrieving from secure storage");
      console.error("Error retrieving from secure storage", error);
      return null;
    }
  }

  static async deleteItem(key: string): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Error removing from secure storage");
      console.error("Error removing from secure storage", error);
    }
  }
}
