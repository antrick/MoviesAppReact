import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent:'center'}}>
          <ActivityIndicator color="red" size={ 70 }/>
        </View>
  )
}
