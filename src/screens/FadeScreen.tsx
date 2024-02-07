import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

  const { opacity,FadeIn, FadeOut} = useFade();

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
            style={{ backgroundColor: '#084F6A', 
            width: 150, 
            height: 150, 
            borderColor: 'white', 
            borderWidth: 5,
            marginBottom: 10,
            opacity: opacity
        }}
        />
        
        <Button
            title="FadeIn"
            onPress={FadeIn}
        />

        <Button
            title="FadeOut"
            onPress={FadeOut}
        />

    </View>
  )
}
