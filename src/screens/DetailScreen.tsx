import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Loading } from '../components/Loading';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const { height } = Dimensions.get('window');



export const DetailScreen = ( { route, navigation }: Props) => {
  
  const movie = route.params;
  
  const { isLoading ,movieFull,cast } = useMovieDetails(movie.id);

  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={stylesPoster.imageContainer}>
        <View style={stylesPoster.imageBorder}>
          <Image source={{ uri: urlImage }} style={stylesPoster.image}/>
        </View>
      </View>

      <View style={stylesPoster.marginContainer}>
          <Text style={stylesPoster.subTitle}>{movie.original_title}</Text>
          <Text style={stylesPoster.title}>{movie.title}</Text>
      </View>

      {/* <View style={{marginTop: 20}}> */}
          {
            isLoading ? <ActivityIndicator color="gray" size={ 30 }/> : <MovieDetails movieFull={ movieFull! } cast={ cast }/>
          }
          
          {/* btn cerrar */}
          <TouchableOpacity style={stylesPoster.backButton} onPress={ () => navigation.pop() }>
            <Icon
              name="arrow-back-outline"
              color="white"
              size={40}
              
            />
          </TouchableOpacity>
      {/* </View> */}
    </ScrollView>
  )
}

const stylesPoster = StyleSheet.create({
  image: {
      flex: 1,
  },
  imageContainer:{
    width: '100%',
    height: height * 0.7,
    //  overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  poster: {
      // width: 300,
      // height: 420,
      // borderRadius: 18,
      // padding: 20
      // backgroundColor: 'green'
  },
  backButton:{
    position: 'absolute',
    zIndex:9999,
    elevation:9,
    top: 30,
    left: 10
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    opacity:0.8
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    
  }
});
