// import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { Loading } from '../components/Loading';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const { setMainColors, setMainPrevColors } = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
      const movie = nowPlaying[index];
      // const [colors,setColors] = useState(null);
      const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      
      const [primary = 'blue', secondary = 'aqua'] = await getImageColors(urlImage);
      setMainColors({ primary, secondary });
      // console.log(primary, seconday)
    }

    useEffect(() => {
      if(nowPlaying.length > 0){
        getPosterColors(0);
      }
    }, [nowPlaying])
    

    if( isLoading ){
      return(
        <Loading/>
      )
    }

  return (
    <GradientBackground >
      <ScrollView>
        <View style={{ marginTop: top + 20}}>
            
            {/* Carousel principal */}
            <View style={{ height: 440 }}>
                <Carousel
                    renderItem={ ({item}: any) => <MoviePoster movie={ item } />}
                    data={nowPlaying}
                    sliderWidth={ width }
                    itemWidth={ 300 } 
                    vertical={false}
                    inactiveSlideOpacity={0.9}
                    onSnapToItem={ index => getPosterColors(index) }
                />
            </View>
            
            {/* Peliculas populares */}
            <HorizontalSlider title='Populares' movies={ popular }/>
            <HorizontalSlider title='Top Rated' movies={ topRated }/>
            <HorizontalSlider title='Upcoming' movies={ upcoming }/>

        </View>
      </ScrollView>
    </GradientBackground>
  )
}
