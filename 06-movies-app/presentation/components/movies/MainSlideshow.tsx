import { View, useWindowDimensions } from 'react-native'
import { Carousel, type CarouselRef } from "react-native-reanimated-carousel";
import { useRef } from 'react';
import { Movie } from '../../../infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
  movies : Movie[];
}

const MainSlideshow = ({ movies }: Props) => {

  const ref =useRef<CarouselRef>(null);
  const width = useWindowDimensions().width;

  return (
    <View className = "h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) =>(
          <MoviePoster id={item.id} poster={item.posterUrl}/>
        )}
        itemSize={150 + 50}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        layout={{
          type: "parallax",
          scale: 0.9,
          offset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow