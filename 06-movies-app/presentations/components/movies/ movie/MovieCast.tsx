import React from "react";
import { View, FlatList } from "react-native";
import { Cast } from "@/infrastructure/interfaces/movie.interface";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="pb-10">
      <FlatList
        data={cast}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
