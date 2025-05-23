import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { getMovieCastByIdAction } from "@/core/actions/movie/get-movie-cast-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  // Movie query
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  // Movie cast query
  const movieCastQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return { movieQuery, movieCastQuery };
};
