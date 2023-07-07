import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

//Drawer screens
import CustomDrawer from './DrawerScreens/CustomDrawer';
import DashBoard from './DrawerScreens/DashBoard';
import ProjectReport from './DrawerScreens/ProjectReport';
import SubmitWork from './DrawerScreens/SubmitWork';
import ChangePassword from './DrawerScreens/ChangePassword';

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Drawers() {
    const Drawer = createDrawerNavigator();
    const systemTheme = useColorScheme();
  return (
    
      <Drawer.Navigator  
      initialRouteName='DashBoard' 
      drawerContent={props=><CustomDrawer {...props}/>}
       screenOptions={{
        drawerLabelStyle:{fontFamily:'Poppins-Medium',fontStyle:'normal',fontSize:15,marginLeft:-14},
        headerTintColor:systemTheme=='dark'?'white':'black',
        headerShadowVisible:true,
       
        headerStyle:{
            backgroundColor:systemTheme=='light'?'rgb(248, 248, 248)':'rgb(33, 33, 33)',
            shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowColor: systemTheme=='dark'?'#1e1e1e':'black',
              shadowOpacity: 1,
              shadowRadius: 3.84,
              elevation: 5,
        }
       }}
       >
          <Drawer.Screen name='Dashboard' component={DashBoard} options={{
              drawerIcon: ({ color, size }) =>
                  (<FontAwesome size={24}  color={systemTheme=='dark'?'white':'black'} name='dashboard' />)
          }} />
          <Drawer.Screen
              name='Submit work'
              component={SubmitWork}
              options={{
                  drawerIcon: ({ color, size }) =>
                      (<Feather name='upload'  color={systemTheme=='dark'?'white':'black'} size={24} />)
              }} />
          <Drawer.Screen name='Project report'  color={systemTheme=='dark'?'white':'black'} component={ProjectReport}
              options={{
                  drawerIcon: ({ color, size }) =>
                      (<Feather name='file-text'  color={systemTheme=='dark'?'white':'black'} size={24} />)
              }} />
          <Drawer.Screen name='Change password'  color={systemTheme=='dark'?'white':'black'} component={ChangePassword}
              options={{
                  drawerIcon: ({ color, size }) =>
                      (<MaterialCommunityIcons name='form-textbox-password'   color={systemTheme=='dark'?'white':'black'} size={24}/>)
              }} />
      
      </Drawer.Navigator>

  
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