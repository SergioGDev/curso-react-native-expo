import React from "react";

import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentations/hooks/useMovie";

import MovieHeader from "@/presentations/components/movies/ movie/MovieHeader";
import MovieDescription from "@/presentations/components/movies/ movie/MovieDescription";
import MovieCast from "@/presentations/components/movies/ movie/MovieCast";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, movieCastQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    movieCastQuery.isLoading ||
    !movieCastQuery.data
  )
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-md mb-4">Espere, por favor...</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );

  const { title, poster, originalTitle } = movieQuery.data;

  return (
    <ScrollView>
      <MovieHeader
        title={title}
        originalTitle={originalTitle}
        poster={poster}
      />

      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={movieCastQuery.data} />
    </ScrollView>
  );
};

export default MovieScreen;
