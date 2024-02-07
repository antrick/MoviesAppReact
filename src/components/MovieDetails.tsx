import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast}: Props) => {
    const genresLength = movieFull.genres.length;
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20}}>
            <View style={{ flexDirection: 'row', alignItems:'center'}}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={16}
                />
                <Text > {movieFull.vote_average} </Text>

                <Text>
                  - {movieFull.genres.map( g => g.name).join(', ')}
                </Text>
            </View>

            {/* Historia */}
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>

            <Text style={{ fontSize: 16 , textAlign: 'justify' }}>
                {movieFull.overview}
            </Text>

            {/* Presupuesto */}
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>

            <Text style={{ fontSize: 16 , textAlign: 'justify' }}>
                { currencyFormatter.format( movieFull.budget, { code: 'USD' } )}
            </Text>
        </View>


        {/* Casting */}
        <View style={{ marginBottom: 100, marginTop: 10 }}>
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                Actores
            </Text>
            <FlatList
                data={cast}
                renderItem={ ( {item} ) => <CastItem actor={item}/> }
                keyExtractor={ (item) => item.id.toString() }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 10, height: 80}}
            />
            {/* <CastItem actor={cast[0]}/> */}
        </View>
    </>
  )
}
