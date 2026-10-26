import {useQuery} from '@tanstack/react-query'
import { nowPlayingAction } from '../../core/actions/movies/now-playing.action';
import { PopularMoviesAction } from '../../core/actions/movies/popular.action';
import { TopRatedMoviesAction } from '../../core/actions/movies/top-rated.action';
import { UpcomingMoviesAction } from '../../core/actions/movies/upcoming.action';


export const useMovies = () => {

    const topRatedQuery = useQuery({
        queryKey: ["movies", "topRated"],
        queryFn: TopRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const upcomingQuery = useQuery({
        queryKey: ["movies", "upcoming"],
        queryFn: UpcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

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
        topRatedQuery,
        upcomingQuery,
        popularQuery,
        nowPlayingQuery

    };
};