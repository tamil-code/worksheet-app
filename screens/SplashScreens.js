import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import spalshLogo from '../assets/Byzero-logo.png'
import Animated, { FadeOut,FadeIn, FadeOutLeft } from 'react-native-reanimated'

export default function SplashScreen({navigation}) {
    const dimensions = useWindowDimensions(); 
    const [showSplash,setSplash] = useState(false);

    console.log(dimensions);
    useEffect(()=>{
        setSplash(true);
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('login') 
        },2000)  
    },[showSplash])
  return (
    <Animated.View style={[styles.container]} entering={FadeIn} exiting={FadeOutLeft}>
        <Animated.Image source={spalshLogo} style={{width:218.55,height:58.27}}  />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
       
      }
})