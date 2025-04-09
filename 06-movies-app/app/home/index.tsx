import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMovies } from "@/presentations/hooks/useMovies";

import MainSlideshow from "@/presentations/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentations/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {
    nowPlayingQuery,
    popularMoviesQuery,
    upcomingMoviesQuery,
    topRatedMoviesQuery,
  } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center align-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        className={`flex-1 mt-2 pb-10`}
        style={{ paddingTop: safeArea.top }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">Movie App</Text>

        {/* Carrusel de imágenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularMoviesQuery.data ?? []}
          className="my-2"
        />

        {/* Top rated */}
        <MovieHorizontalList
          title="Mejor valoradas"
          movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
          className="my-2"
          loadNextPage={() => topRatedMoviesQuery.fetchNextPage()}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingMoviesQuery.data ?? []}
          className="my-2"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
