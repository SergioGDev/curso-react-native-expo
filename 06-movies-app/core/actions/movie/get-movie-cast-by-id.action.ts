import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditResponse } from "@/infrastructure/interfaces/credit.response";
import { Cast } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieCastByIdAction = async (id: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCreditResponse>(
      `/${id}/credits`
    );

    console.log("Cast Película cargado");

    return data.cast.map((cast) => MovieMapper.fromTheMovieCastDBToCast(cast));
  } catch (error) {
    console.log(error);
    throw "Cannot load movie";
  }
};
