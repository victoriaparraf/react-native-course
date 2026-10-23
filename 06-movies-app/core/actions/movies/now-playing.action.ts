import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { movieApi } from "../../api/movie-api"


export const nowPlayingAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        return movies;
    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}