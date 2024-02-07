import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props{
    actor: Cast
}

export const CastItem = ({actor}: Props) => {

    const urlImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={stylesCast.card}>
        {
            actor.profile_path && <Image source={{ uri: urlImage }} style={stylesCast.imgProfile} />
        }
       
        <View style={stylesCast.actorInfo}>
            <Text style={stylesCast.name}>
                {actor.name}
            </Text>
            <Text style={stylesCast.character}>
                {actor.character}
            </Text>
        </View>
    </View>
  )
}

const stylesCast = StyleSheet.create({
    card:{
        flexDirection: 'row',
        height: 60,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginLeft: 20,
        paddingRight: 15
        // marginBottom: 20
    },
    actorInfo:{
        marginLeft: 10,
        marginTop: 4
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    character:{
        fontSize: 18,
        opacity: 0.7
    },
    imgProfile:{
        width: 60,
        height: 60,
        borderRadius: 10
    }
});