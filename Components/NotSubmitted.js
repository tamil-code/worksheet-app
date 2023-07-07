import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotSubmitted() {
  return (
    <View style={styles.btn}>
      <Text style={styles.txt}>Not Submitted</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // #F8C4B4
    btn:{
        backgroundColor:'#D61355',
        width:130,
        height:30,
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    // #D61355
    txt:{
        color:'white',
        fontFamily:'Poppins-SemiBold',
        fontWeight:600,
        fontSize:12.5
    }
})