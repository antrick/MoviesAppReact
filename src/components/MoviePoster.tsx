import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

export const MoviePoster = ({ movie, height = 420, width = 300}: Props) => {

    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<HomeScreenNavigationProp>();
    
  return (
    <TouchableOpacity 
    activeOpacity={0.8} 
    style={{width ,height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7}}
    onPress={ () => navigation.navigate('DetailScreen',movie) }
    >
        <View style={stylesPoster.imageContainer}>
            <Image source={{ uri: urlImage }} style={stylesPoster.image}/>
        </View>
    </TouchableOpacity>
  )
}


const stylesPoster = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        
    },
    imageContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },
    poster: {
        // width: 300,
        // height: 420,
        // borderRadius: 18,
        // padding: 20
        // backgroundColor: 'green'
    }
});