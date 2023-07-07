import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native'
// import SplashScreen from "react-native-splash-screen"; 
//theming and components
import {Provider} from 'react-native-paper'

//locale
import moment from 'moment'

moment.locale('en')

//screens 
import SplashScreens from './screens/SplashScreens'
import LoginScreen from './screens/LoginScreen'
import Drawers from './screens/Drawers'

//react-native firebase cloud message listner package
import messaging from '@react-native-firebase/messaging';

import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
   
  const systemTheme = useColorScheme();
  console.log(systemTheme);
  const theme = {
    
     
      "colors": {
        "primary": "rgb(0, 99, 155)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(206, 229, 255)",
        "onPrimaryContainer": "rgb(0, 29, 51)",
        "secondary": "rgb(81, 96, 111)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(213, 228, 247)",
        "onSecondaryContainer": "rgb(14, 29, 42)",
        "tertiary": "rgb(104, 88, 122)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(239, 219, 255)",
        "onTertiaryContainer": "rgb(35, 21, 51)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(252, 252, 255)",
        "onBackground": "rgb(26, 28, 30)",
        "surface": "rgb(252, 252, 255)",
        "onSurface": "rgb(26, 28, 30)",
        "surfaceVariant": "rgb(222, 227, 235)",
        "onSurfaceVariant": "rgb(66, 71, 78)",
        "outline": "rgb(114, 119, 127)",
        "outlineVariant": "rgb(194, 199, 207)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(47, 48, 51)",
        "inverseOnSurface": "rgb(241, 240, 244)",
        "inversePrimary": "rgb(151, 203, 255)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(239, 244, 250)",
          "level2": "rgb(232, 240, 247)",
          "level3": "rgb(224, 235, 244)",
          "level4": "rgb(222, 234, 243)",
          "level5": "rgb(217, 231, 241)"
        },
        "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
        "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
        "backdrop": "rgba(44, 49, 55, 0.4)"
      
    }
  };
  const darkmode = {
    "colors": {
      "primary": "rgb(151, 203, 255)",
      "onPrimary": "rgb(0, 51, 83)",
      "primaryContainer": "rgb(0, 74, 118)",
      "onPrimaryContainer": "rgb(206, 229, 255)",
      "secondary": "rgb(185, 200, 218)",
      "onSecondary": "rgb(36, 50, 64)",
      "secondaryContainer": "rgb(58, 72, 87)",
      "onSecondaryContainer": "rgb(213, 228, 247)",
      "tertiary": "rgb(211, 191, 230)",
      "onTertiary": "rgb(57, 42, 73)",
      "tertiaryContainer": "rgb(80, 64, 97)",
      "onTertiaryContainer": "rgb(239, 219, 255)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(36, 50, 64)",
      "onBackground": "rgb(226, 226, 229)",
      "surface": "rgb(26, 28, 30)",
      "onSurface": "rgb(226, 226, 229)",
      "surfaceVariant": "rgb(66, 71, 78)",
      "onSurfaceVariant": "rgb(194, 199, 207)",
      "outline": "rgb(140, 145, 152)",
      "outlineVariant": "rgb(66, 71, 78)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(226, 226, 229)",
      "inverseOnSurface": "rgb(47, 48, 51)",
      "inversePrimary": "rgb(0, 99, 155)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(32, 37, 41)",
        "level2": "rgb(36, 42, 48)",
        "level3": "rgb(40, 47, 55)",
        "level4": "rgb(41, 49, 57)",
        "level5": "rgb(44, 53, 62)"
      },
      "surfaceDisabled": "rgba(226, 226, 229, 0.12)",
      "onSurfaceDisabled": "rgba(226, 226, 229, 0.38)",
      "backdrop": "rgba(44, 49, 55, 0.4)"
    }
  };

  const darkmode2 = {
    "colors": {
      "primary": "rgb(159, 202, 255)",
      "onPrimary": "rgb(0, 50, 88)",
      "primaryContainer": "rgb(0, 73, 125)",
      "onPrimaryContainer": "rgb(209, 228, 255)",
      "secondary": "rgb(187, 199, 219)",
      "onSecondary": "rgb(37, 49, 64)",
      "secondaryContainer": "rgb(59, 72, 88)",
      "onSecondaryContainer": "rgb(215, 227, 248)",
      "tertiary": "rgb(215, 190, 228)",
      "onTertiary": "rgb(59, 41, 72)",
      "tertiaryContainer": "rgb(82, 63, 95)",
      "onTertiaryContainer": "rgb(243, 218, 255)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(26, 28, 30)",
      "onBackground": "rgb(226, 226, 230)",
      "surface": "rgb(26, 28, 30)",
      "onSurface": "rgb(226, 226, 230)",
      "surfaceVariant": "rgb(67, 71, 78)",
      "onSurfaceVariant": "rgb(195, 198, 207)",
      "outline": "rgb(141, 145, 153)",
      "outlineVariant": "rgb(67, 71, 78)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(226, 226, 230)",
      "inverseOnSurface": "rgb(47, 48, 51)",
      "inversePrimary": "rgb(0, 97, 164)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(33, 37, 41)",
        "level2": "rgb(37, 42, 48)",
        "level3": "rgb(41, 47, 55)",
        "level4": "rgb(42, 49, 57)",
        "level5": "rgb(45, 52, 62)"
      },
      "surfaceDisabled": "rgba(226, 226, 230, 0.12)",
      "onSurfaceDisabled": "rgba(226, 226, 230, 0.38)",
      "backdrop": "rgba(44, 49, 55, 0.4)"
    }
  }
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

 

  const Stack = createNativeStackNavigator();
  return (
    
    <Provider theme={systemTheme=='dark'?darkmode2:theme}>
        <NavigationContainer theme={systemTheme=='dark'?DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName='splash' screenOptions={
        {
          headerShown:false
        }
      }>
        <Stack.Screen name='splash' component={SplashScreens} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='drawer' component={Drawers}/> 
      </Stack.Navigator>
    </NavigationContainer> 
    </Provider>
 
  )
}

const styles = StyleSheet.create({

})