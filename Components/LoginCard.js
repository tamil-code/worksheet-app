import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'
import React from 'react'

export default function LoginCard({children,extraStyle}) {
  const dimension = useWindowDimensions();
  const systemTheme = useColorScheme();
  return (
    <View style={[styles.container,extraStyle,{height:dimension.height/1.7,backgroundColor:systemTheme=='dark'?'rgb(51, 51, 51)':'rgb(248, 248, 248)'}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:300,
        borderColor:'#E8E2E2',
        borderRadius:2,
        borderWidth:1
    }
})