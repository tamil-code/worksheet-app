import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

export default function LoadingAnimation() {
    const systemTheme = useColorScheme();
  return (
    <View style={{flex:1,backgroundColor:systemTheme == 'dark' ? 'rgb(51, 51, 51)' : 'rgb(248, 248, 248)',justifyContent:'center',alignItems:'center',width:'100%'}}>
       <Animatable.Image source={require('../assets/favicon4.png')} 
   animation="pulse" 
   easing="ease-out" 
   style={{width:100,height:100}}
   iterationCount="infinite" 
   
   />
    </View>
  )
}

const styles = StyleSheet.create({})