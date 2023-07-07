import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Submitted() {
  return (
    <View style={styles.btn}>
      <Text style={styles.txt}>Submitted</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // #C7E8CA
    btn:{
        backgroundColor:'#539165',
        width:130,
        height:30,
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
    },
    // #539165
    txt:{ 
        color:'white',
        fontFamily:'Poppins-SemiBold',
        fontWeight:400,
        fontSize:12.5
    }
})