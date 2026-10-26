import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api"


export const PopularMoviesAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        return movies;
    } catch (error) {
        console.log(error)
        throw 'Cannot load popular movies'
    }
}