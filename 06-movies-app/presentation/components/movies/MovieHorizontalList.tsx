import { View, Text, FlatList } from 'react-native'
import { Movie } from '../../../infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
    title?: string;
    movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className='text-2xl font-bold px-4 mb-2'>{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showHorizontalScrollIndicator={false}
        keyExtractor={(item) => '${item.id}'}
        renderItem={({ item }) => (
            <MoviePoster id={item.id} poster={item.posterUrl} smallPoster/>
        )}
      />
    </View>
  )
}

export default MovieHorizontalList