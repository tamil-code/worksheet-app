import { StyleSheet, Text, View, useWindowDimensions, useColorScheme, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

//Ui elements
import { Card, TextInput, Button, HelperText,Snackbar} from 'react-native-paper'

//icons
import Feather from 'react-native-vector-icons/Feather'
export default function ChangePassword() {
    const systemTheme = useColorScheme();
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const dimension = useWindowDimensions();

    //password hide states
    const [oldPassHide, setOldPassHide] = useState(true);
    const [newPassHide, setNewPassHide] = useState(true);
    const [confirmPassHide, setConfirmPassHide] = useState(true);

    const hasMatched = () => {
        return !(confirmPass == newPass)
    };
    const [requried, setRequired] = useState({
        oldpass: false,
        newPass: false,
        confirmPass: false
    })
  const[submit,setOnsubmit] =useState(false);
   const oldPasswordHandler = (text)=>{
       setOldPass(text);
       if(text){
        setRequired((prev) => { return { ...prev, oldpass: false } })
       }
   }
   const newPasswordHandler = (text)=>{
      setNewPass(text);
      if(text){
        setRequired((prev) => { return { ...prev, newPass: false } })
      }
   }
   const confirmPassworldHandler = (text)=>{
     setConfirmPass(text);
     if(text){
        setRequired((prev) => { return { ...prev, confirmPass: false } })
     }
   }

    const submitHandler = () => {
        if (oldPass.length == 0) {
            setRequired((prev) => { return { ...prev, oldpass: true } })
        }
        if (newPass.length == 0) {
            setRequired((prev) => { return { ...prev, newPass: true } })
        }
        if (confirmPass.length == 0) {
            setRequired((prev) => { return { ...prev, confirmPass: true } })
        }
        if(oldPass.length>0 && !hasMatched()){
              setOnsubmit(true)
              console.log(submit);
              console.log("snackbar triggered");
              setOldPass('');
              setNewPass('');
              setConfirmPass('');
        }
    }
    return (
        <View style={[styles.container,{backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}]}>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Card style={[{ width: dimension.width / 1.2, height: dimension.height / 1.6 ,backgroundColor:systemTheme=='dark'?'rgb(51, 51, 51)':'rgb(248, 248, 248)'}, styles.cardStyle]} mode='elevated'>
                <Card.Content style={{ gap: 30, paddingTop: 20 }}>
                    <View>
                        <TextInput
                            label='Old password'
                            mode='outlined'
                            value={oldPass}
                            onChangeText={oldPasswordHandler}
                            right={<TextInput.Icon
                                icon={(oldPassHide) ? 'eye' : 'eye-off'}
                                onPress={() => { setOldPassHide((prev) => !prev) }}

                            />}
                            secureTextEntry={oldPassHide}
                            error={requried.oldpass}
                        />
                        {requried.oldpass && <HelperText type='error' style={{height:24}} visible={requried.oldpass}>
                             old password is required
                        </HelperText>}
                    </View>

                    <View>
                        <TextInput
                            label='New password'
                            mode='outlined'
                            value={newPass}
                            onChangeText={newPasswordHandler}
                            right={<TextInput.Icon
                                icon={(newPassHide) ? 'eye' : 'eye-off'}
                                onPress={() => { setNewPassHide((prev) => !prev) }}

                            />}
                            secureTextEntry={newPassHide}
                            error={requried.newPass}
                        />
                       {requried.newPass && <HelperText type='error' style={{height:24}}>new password is required</HelperText>}
                    </View>

                    <View>
                        <TextInput
                            label='Confirm password'
                            mode='outlined'
                            value={confirmPass}
                            onChangeText={confirmPassworldHandler}
                            right={<TextInput.Icon
                                icon={(confirmPassHide) ? 'eye' : 'eye-off'}
                                onPress={() => { setConfirmPassHide((prev) => !prev) }}

                            />}
                            secureTextEntry={confirmPassHide}
                            error={hasMatched() || requried.confirmPass}
                        />
                       {requried.confirmPass && <HelperText type='error' style={{height:24}}>confirm password is required</HelperText>}
                       {hasMatched() &&  <HelperText type='error' style={{height:24}} visible={true} >
                            password not matching !
                        </HelperText>}
                    </View>
                </Card.Content>
             
                <Card.Actions  >

                    <View style={{ width: '100%'}}>
                        <Button mode='contained' uppercase={true} contentStyle={{ width: 200, height: 50, }} style={{ marginTop: 60, borderRadius: 50, fontFamily: 'Poppins-Medium',  alignSelf: 'center' }} onPress={submitHandler}>
                            Change Password
                        </Button>
                        
                    </View>


                </Card.Actions>
                
            </Card>
            </KeyboardAvoidingView>
            {submit && <Snackbar
                visible={submit}
                onDismiss={()=>{setOnsubmit(false)}}
                duration={1500}
               style={{backgroundColor:'green'}}
                action={{
                    icon: 'check', 
                    onPress: () => { 
                        setOnsubmit(false)
                    },
                }}>
                Password Changed Successfully
            </Snackbar>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    cardStyle: {
        position:'relative'
    },
    floatingBtn:{
        position:'absolute',
        bottom:150,
        right:0
    }
})