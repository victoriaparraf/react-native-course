import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-responses";

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdropUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }
    }
}