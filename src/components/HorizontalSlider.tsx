import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Movie } from '../interfaces/movieInterface';
interface Props{
    title?: string
    movies: Movie[];
}
export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ 
        // backgroundColor: 'red',
        height: (title) ? 260 : 230 
     }}>
        { title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{title}</Text> }
        <FlatList
            data={ movies }
            renderItem={ ({item}: any) => (<MoviePoster movie={ item } height={200} width={140}/>) }
            keyExtractor={ (item) => item.id.toString() }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
