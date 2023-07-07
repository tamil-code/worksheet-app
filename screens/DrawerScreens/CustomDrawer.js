import { StyleSheet, Text, View,TouchableOpacity,useWindowDimensions ,Image, useColorScheme} from 'react-native'
import React, { useState } from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import {useNavigation} from '@react-navigation/native'
//images
import spalshLogo from '../../assets/Byzero-logo.png'
import lightLogo from '../../assets/Byzero-logo-white.png'
//icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider ,Portal,Dialog, Button} from 'react-native-paper'


export default function CustomDrawer(props) {
   const dimension = useWindowDimensions();
   const navigation = useNavigation();
   const systemTheme = useColorScheme();
   const h1 = dimension.height/1.5;

   //dialog modal state
   const[showDialog,setShowDialog] = useState(false);

   const showAlert = ()=>{
     props.navigation.closeDrawer();
      setShowDialog(true);
   }
   const closeAlert = ()=>{
      setShowDialog(false);
   }
  return (
     <DrawerContentScrollView {...props} style={{position:'relative',backgroundColor:systemTheme=='light'?'rgb(248, 248, 248)':'rgb(33, 33, 33)'}}>
        <View style={{height:h1}}>
        <Image source={systemTheme=='light'?spalshLogo:lightLogo} style={{width:218.55-20,height:58.27-7,marginBottom:25,marginTop:10,alignSelf:'center'}}  />
        <View style={styles.profileTextContainer}>
         
            <MaterialCommunityIcons name='account'  color={systemTheme=='dark'?'white':'black'} size={32} style={{marginTop:15}}/>
           <Text style={[styles.profileText,{color:systemTheme=='dark'?'white':'black'}]}>Hi,<Text style={[styles.name,{color:systemTheme=='dark'?'white':'black'}]}> tamil</Text></Text>
         
        </View>
        <Divider bold={true}  style={{marginTop:-13,marginBottom:10}}/>
        <DrawerItemList  {...props}/>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 18, justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}  onPress={showAlert}>
              <MaterialIcons name='logout'  color={'red'} size={24} />
              <Text style={[styles.logout,{color:'red'}]} >Logout</Text>
           </TouchableOpacity>
          </View>
        
         <Portal>
              <Dialog visible={showDialog} onDismiss={closeAlert}>
                 <Dialog.Content>
                     <Text style={[styles.alertText,{color:systemTheme=='dark'?'white':'black'}]}>Are you sure wanna logout ?</Text>
                 </Dialog.Content>
                 <Dialog.Actions>
                     <Button mode='text' onPress={closeAlert} contentStyle={styles.alertBtn}>no</Button>
                     <Button mode='text' contentStyle={styles.alertBtn} onPress={()=>{navigation.navigate('login')}}>yes</Button>
                 </Dialog.Actions>
              </Dialog>
         </Portal>
     </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
   bottomDrawer:{
   
      alignItems:'center',
      position:'absolute',
      bottom:'30%',
      right:0,
      width:'100%'
   },
   userText:{
      fontFamily:'Poppins_ExtraBold',
      fontSize:24,
      fontWeight:600,
      letterSpacing:2
   },
   logout:{
      fontFamily:'Poppins-SemiBold',
 
   },
   profileText:{
     fontFamily:'Poppins-Medium',
     letterSpacing:1,
     fontSize:17,
     paddingTop:15

   },
   name:{
      fontFamily:'Poppins-SemiBold',
     letterSpacing:.5,
     fontSize:19,
     paddingTop:15,
     color:'black'
   },
   profileTextContainer:{
      paddingBottom:15,
      height:80,
      
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      gap:14,
      marginLeft:14
     
   },
   alertText:{
      fontFamily:'Poppins-Medium',
      fontSize:16,
      fontWeight:300
   },
   alertBtn:{
      fontFamily:'Poppins-Medium',
      fontSize:19,
   }
})