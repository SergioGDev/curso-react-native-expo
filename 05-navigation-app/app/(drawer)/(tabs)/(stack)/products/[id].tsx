import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-10">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="font-work-light">{product.description}</Text>
      <Text className="font-work-medium">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
