import { Image, StyleSheet,  TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import LoginCard from '../Components/LoginCard'

import {Button, TextInput,HelperText, Checkbox, Text} from 'react-native-paper'
import lightLogo from '../assets/Byzero-logo-white.png'
export default function LoginScreen({navigation}) {
  const systemTheme = useColorScheme();
   const[username,setUsername] = useState('');
   const[password,setPassword] = useState('');
   const[hide,setHide] = useState(true);
   
   const [userErr,setUserErr] = useState(false);
   const [passErr,setPassErr] = useState(false);
   
   //checkbox state
   const[checked,setChecked] = useState(false);
  const usernameHandler = (text)=>{
    setUsername(text);
    if(text){
      setUserErr(false);
    }
  }

  const passwordHandler = (text)=>{
    setPassword(text);
    if(text){
      setPassErr(false);
    }
  }


   const LoginHandler = ()=>{
      if(username.length>0 && password.length>0){
        navigation.navigate('drawer');
      }
    if(username.length==0){
         setUserErr(true);
      }
      if(password.length==0){
        setPassErr(true);
      }
   }
  return (
    <View style={[styles.container,{backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}]}>
      <LoginCard extraStyle={{transform: [{rotate: '2deg'}],borderWidth:.2}}>
      <LoginCard extraStyle={{transform: [{rotate: '4deg'}],borderWidth:1.2}}>
      <LoginCard  extraStyle={{transform: [{rotate: '-4deg'}],}} >
        <LoginCard extraStyle={{transform: [{rotate: '-4deg'}],}} >
       
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',rowGap:5,}}>
        <Image source={systemTheme=='light'?require('../assets/Byzero-logo.png'):lightLogo} style={{width:218.55,height:58.27,  transform:[{rotate:'2deg'}],position:'absolute',top:14}}/>
         
            {/* <MaterialCommunityIcons name='account' size={28} color='#CCC9C9' /> */}
                <View style={{width:'100%',rowGap:30,alignItems:'center',marginTop:40,paddingTop:40}}>
                  <View style={styles.textInputWrapper}>
                    <TextInput
                      label='Username'
                      mode='outlined'
                      value={username}
                      onChangeText={usernameHandler}
                      style={styles.input}
                      error={userErr}
                    >
                    </TextInput>
                   {userErr &&  <HelperText type='error'   style={{alignSelf:'flex-start',marginLeft:10}} visible={userErr}> username is required</HelperText>}
                  </View>


                  {/* <FontAwesome5 name='key' size={24} color='#CCC9C9' /> */}
                 <View style={styles.textInputWrapper}>
                 <TextInput
                    mode='outlined'
                    label={'Password'}
                    value={password}
                    onChangeText={passwordHandler}
                    secureTextEntry={hide}
                    style={styles.input}
                    right={<TextInput.Icon 
                      icon={(hide)?'eye':'eye-off'} 
                      onPress={()=>{setHide((prev)=>!prev)}}
                      style={{marginTop:15}}
                      />}
                      error={passErr}
                    textAlignVertical='center'
                  >

                  </TextInput>
                {passErr &&   <HelperText type='error'  style={{alignSelf:'flex-start',marginLeft:10}} visible={passErr}>password is required</HelperText>}
                 </View>
                
                <View style={{flexDirection:'row',alignItems:'center', transform:[{rotate:'2deg'}]}}>
                <Checkbox
                 status={checked?'checked':'unchecked'}
                 onPress={() => {
                  setChecked(!checked);
                }}
                 />
                <Text variant='labelLarge' style={{fontFamily:'Poppins-Medium',opacity:.8}}>Remember me</Text>
                </View>
                </View>

          {/* <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate('drawer')}}>
              <Text style={styles.btn2Text}>Login</Text>
          </TouchableOpacity> */}
          <Button mode='contained' uppercase={true} contentStyle={{width:200,height:50,}} style={{ transform:[{rotate:'2deg'}], marginTop:20,borderRadius:50,alignSelf:'center'}}  onPress={LoginHandler}  >
             Login
          </Button>
        </View>
    </LoginCard>
    </LoginCard>
    </LoginCard>
    </LoginCard>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
      },
      input:{
       width:'86%',
       height:40,
       fontFamily:'Poppins-SemiBold',
      
    },
      inputWrapper:{
        flexDirection:'row',
        width:'90%',
        height:50,
        borderWidth:1,
        borderRadius:12,
        borderColor:'#CCC9C9',
        paddingHorizontal:10,
        paddingVertical:8,
        backgroundColor:'#F9F9F9',
        gap:10,
        marginVertical:10,
        alignItems:'center',
       
        
      },
      btn2:{
        paddingVertical:16,
        paddingHorizontal:48,
        backgroundColor:'#0081C9',
        borderRadius:5,
        width:'75%',
        height: 56,
        textAlign:'center',
        marginTop:55,
        transform:[{rotate:'2deg'}],
        
       },
       btn2Text:{
        color: 'white',
        fontWeight: 500,
        fontSize: 16,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        fontWeight:700
       },
       textInputWrapper:{
        width:'100%',
        paddingTop:10,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotate:'2deg'}]
       }
})