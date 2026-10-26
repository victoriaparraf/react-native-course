import {useQuery} from '@tanstack/react-query'
import { nowPlayingAction } from '../../core/actions/movies/now-playing.action';
import { PopularMoviesAction } from '../../core/actions/movies/popular.action';


export const useMovies = () => {

    const popularQuery = useQuery({
        queryKey: ["movies", "popular"],
        queryFn: PopularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const nowPlayingQuery = useQuery({
        queryKey: ["movies","nowPlaying"],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {

        nowPlayingQuery,
        popularQuery

    };
};