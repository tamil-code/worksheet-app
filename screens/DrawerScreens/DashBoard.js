import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {DataTable} from 'react-native-paper'

//custom components
import Submitted from '../../Components/Submitted';
import NotSubmitted from '../../Components/NotSubmitted';
import LoadingAnimation from '../../Components/LoadingAnimation';
import PushNotification from 'react-native-push-notification'
export default function DashBoard({navigation}) {
useEffect(()=>{
  createChannels();
},[])
  const createChannels = ()=>{
    PushNotification.createChannel({
      channelId:"test-channel",
      channelName:"Test-name"
    })
  }
  //notification handler
  const handleLoginNotification =()=>{
    PushNotification.localNotification({
      channelId:"test-channel",
      vibrate: true,
      title:"login successful",
      vibration: 300,
      message:"welcome to Byzero worksheet app",
      smallIcon:"ic_notification",
      largeIcon: "ic_notification",
     
    })
    PushNotification.localNotificationSchedule({
      channelId:"test-channel",
      vibrate: true,
      title:"Alert",
      message: "scheduled local message", // (required)
      date: new Date(Date.now() + 10 * 1000), // in 60 secs
      title:"scheduled notification",
      bigText:"this notification is scheduled after 10 sec after login on Byzero app",
      smallIcon:"ic_notification",
      largeIcon: "ic_notification", 
    })
 
  }
  const dashboard =  (
    <View onLayout={handleLoginNotification}>
      
    <DataTable style={[styles.table,{backgroundColor:systemTheme=='light'?'rgb(248, 248, 248)':'rgb(33, 33, 33)'}]}  >
      <DataTable.Header style={styles.header}>
        <DataTable.Title textStyle={styles.tableHeadingText} style={styles.headerCell}>
                Date
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableHeadingText} style={styles.headerCell}>
                Status
        </DataTable.Title>
       
      </DataTable.Header>
  
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>01/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell}><Submitted/></DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>02/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell}><NotSubmitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle} style={styles.dateCell}>03/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell}><Submitted/></DataTable.Cell>
       </DataTable.Row>
       <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>04/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell}><Submitted/></DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>05/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell}><NotSubmitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>06/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell}><Submitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>07/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell}><NotSubmitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>08/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell}><Submitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>09/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} ><NotSubmitted/></DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}    style={styles.dateCell}>10/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} centered={true}><Submitted/></DataTable.Cell>
       </DataTable.Row>
  
    
    </DataTable>
  
  
    </View>
  )
  const[loading,setLoading] = useState(true);
 useEffect(()=>{
  setTimeout(() => {
    setLoading(false);
  }, 3000);
 },[])
 useEffect(()=>{
  if(!loading){

  }
 })
 const loader = <LoadingAnimation/>
 const systemTheme = useColorScheme();
  return(
     <View style={[styles.container,{backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}]}>
       {(loading==true)?loader:dashboard}
     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
        
       
    },
    table:{
      width:'90%',
      padding:15,
      marginTop:14,
      borderColor:'grey',
      borderBottomWidth:1,
      borderRightWidth:1,
      borderLeftWidth:1,
      padding:0
       
    },
    
    header:{
      // backgroundColor: '#DCDCDC',
      backgroundColor:'#0081C9',
      width:'100%'
      
    },
    headerCell:{
      justifyContent:'center'
    },
    tableHeadingText:{
      fontFamily:'Poppins-SemiBold',
      fontWeight:700,
      color:'white',
      fontSize:16
    },
    dateStyle:{
      fontFamily:'Poppins-SemiBold',
      fontWeight:100
    },
  dateCell: 
  { 
    borderRightWidth: 1,
    borderBottomWidth:0,
    alignItems: 'center',
    justifyContent: 'center' ,
    borderColor:'grey'
    },
    statusCell:{
      justifyContent:'center',
      alignItems:'center',
    },
    rowStyle:{
      borderColor:'black',
      borderBottomWidth:1,
      borderLeftWidth:0,
      borderRightWidth:0
    }
})