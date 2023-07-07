import { StyleSheet, Text, View,ScrollView,useWindowDimensions, useColorScheme} from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import {Chip,Snackbar} from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';


//custom imports
import SubmitForm from '../../Components/SubmitForm';
import {check} from 'react-native-vector-icons/MaterialIcons'
export default function SubmitWork() {
  const systemTheme = useColorScheme();
  const[showDate,setShowDate] = useState(false);   
  const[currentDate,setCurrentDate] = useState(new Date());
  let fDate = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear();
  const[text,setText] = useState(fDate);

  //animated ref for scrolling
  const ref = useRef();
  const[ycord,setYcord] = useState(0);
  //snackbar state
  const[Visible,setVisible] = useState(false);
 
  const[deleteSnack,setDeleteSnack] = useState(false);

  const onChangeDate = (event,selectedDate)=>{
    setShowDate(false)
    let tempdate =selectedDate || currentDate;
    setCurrentDate(tempdate);
    let fDate = tempdate.getDate()+'/'+(tempdate.getMonth()+1)+'/'+tempdate.getFullYear();
    console.log(fDate);
    setText(fDate);
    
  }

 const [submitFormList,setSubmitFormList] =useState([0]);
 const[EnableDeleteBtn,setDeleteBtn] = useState(true);
//  useEffect(()=>{
//    if(submitFormList.length===1){
//       setDeleteBtn(false);
//    }
//    else{
//     setDeleteBtn(true);
//    }
//  },[submitFormList.length])
let addcount = 0;
  const FormAddHandler = ()=>{
   
    addcount+=1;
    console.log(addcount);
    // submitFormList.push(submitFormList[submitFormList.length-1]+1);
    setSubmitFormList((PrevForm)=>{return [...PrevForm,PrevForm.push(PrevForm[PrevForm.length-1]+1)]})
   console.log("In submitWork: "+ycord+612.1818);
   ref.current.scrollTo({
    x: 0,
    y:ycord+678.8720703125, 
    animated: true,
  });
   console.log('form added at:'+ycord);
   
  } 
  const FormDeleteHandler = (i)=>{
      if(i!==0){
        setSubmitFormList((PrevForm)=>{return PrevForm.filter((formval)=>{return formval!==i })})
        setDeleteSnack(true);
        ref.current.scrollTo({
          x: 0,
          y:ycord-678.8720703125, 
          animated: true,
        });
      }
      else{
        setVisible(true);
      }
  }
 const dimension = useWindowDimensions();
  return (
    <View style={[styles.container,{backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}]}>
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',gap:10}} onLayout={(e)=>{
        console.log("h2:"+e.nativeEvent.layout.height);
       }}>
        <Text style={{fontFamily:'Poppins-Medium',zIndex:10,fontSize:16,color:systemTheme=='dark'?'white':'black'}}>Date:</Text>
       <Chip onPress={()=>{setShowDate(true)}} style={styles.dateChip} textStyle={styles.dateContent} onClose={()=>{setShowDate(true)}} closeIcon='chevron-down' elevated={true}>{text}</Chip>
       </View>
      
      <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center',rowGap:40,paddingTop:10,paddingBottom:50}} ref={ref}>
          
         {submitFormList?.map((i)=>{
           return(
            <View style={{width:dimension.width,height:dimension.height/1.23 ,justifyContent:'center',alignItems:'center',backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}}  onLayout={(e)=>{
              console.log("View layout: "+e.nativeEvent.layout.y);
              const diff = e.nativeEvent.layout.y-ycord
              console.log("difference: "+diff);
              setYcord(e.nativeEvent.layout.y);
              }} key={i} >
                  <SubmitForm onAddForm={FormAddHandler}  onFormDelete={FormDeleteHandler.bind(null,i)}  deleteBtn={EnableDeleteBtn}/>
            </View>
           )
         })}
      </ScrollView>
       
      {showDate && <DateTimePicker
        value={currentDate}
        mode='date'
        onChange={onChangeDate}
        display='default'
        
        
       />}
        <Snackbar 
         visible={Visible}
         onDismiss={()=>{setVisible(false)}}
         duration={2000}
         action={{
          icon:'close',
          onPress:()=>{
            setVisible(false)
          }
         }}
        >
             you can't delete this form !
        </Snackbar>

        {/* <Snackbar 
        visible={addSnack}
        onDismiss={()=>{setAddSnack(false)}}
        style={{backgroundColor:'green'}}
        duration={2000}
        action={{
          icon:'check-bold',
          
          onPress:()=>{
            setAddSnack(false)
          },
       
        }}
        >
           Form Added Successfully !
        </Snackbar> */}
    
        <Snackbar 
        visible={deleteSnack}
        onDismiss={()=>{setDeleteSnack(false)}}
        style={{backgroundColor:'red'}}
        duration={2000}
        action={{
          icon:'check-bold',
          
          onPress:()=>{
            setDeleteSnack(false)
          },
       
        }}
        >
           Form Deleted Successfully !
        </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
   
},
dateChip:{
  height:55,
  position:'relative',
  top:10,
  marginBottom:20,
  zIndex:10,
 
},
dateContent:{
  fontFamily:'Poppins-Medium'
}

      
})