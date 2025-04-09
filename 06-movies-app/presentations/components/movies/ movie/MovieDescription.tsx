import { View, Text } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Formatter } from "@/config/helpers/formatter";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5 pb-6">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(", ")}</Text>
      </View>

      <Text className="text-xl font-bold mt-4">Sinopsis</Text>
      <Text className="text-lg font-normal mt-1">{movie.description}</Text>
      <Text className="text-lg font-bold mt-5">Presupuesto: </Text>
      <Text className="text-lg font-semibold mt-1">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
