import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={["#00000040", "transparent"]}
        start={{ x: 0, y: 0 }}
        style={{
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      {/* Botón de regreso */}
      <View className="absolute z-50 top-12 left-4 elevation-lg">
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        className="shadow-xl shadow-black/20"
        style={{ height: screenHeight * 0.7 }}
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{
              uri: poster,
            }}
            className="flex-1"
            resizeMode="cover"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="text-md font-light">{originalTitle}</Text>
        <Text className="text-2xl font-semibold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
