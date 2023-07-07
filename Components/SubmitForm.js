import { StyleSheet, View, useWindowDimensions, useColorScheme ,TouchableOpacity} from 'react-native'
import React, { useState, useRef } from 'react'


import { TextInput, Card, Text, Searchbar, Chip, HelperText, IconButton, MD3Colors, useTheme, Button, Menu ,Divider} from 'react-native-paper'
 
import { Tooltip } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';


const projectlistarr = ["web application","mobile application","wordpress","php application"]


export default function SubmitForm({ onAddForm, onFormDelete, deleteBtn }) {
    const dimension = useWindowDimensions();
    const systemTheme = useColorScheme();
    const [description, setDescription] = useState(0);
    const [descError, setDescError] = useState(false);

    const [showTime, setShowTime] = useState(false);
    
    const [Time, SetTime] = useState(new Date());
    const [TimeText, setTimeText] = useState('--:--');
   
    const formRef = useRef();
 
    //coordinates for scroll
    const [ycord, setYcord] = useState(0);
    
  
    //dynamic search textinput handler
    const [project, setProject] = useState('');
    const[projectList,setProjectList] = useState(projectlistarr);
    const[projectDropDown,setProjectDropDown] =useState(false);
   
    const closeProjectDropDown = ()=>{
        setProjectDropDown(false);
    }
    const ItemSelectHandler = (name)=>{
        console.log(name);
        setProject(name);
        setProjectDropDown(false);
    }
   
//     const onDropDownPressed = (event)=>{
     
//       const { nativeEvent } = event;
//     const anchor1 = {
//     x: nativeEvent.pageX,
//     y: nativeEvent.pageY,
//   };
//   const anchor2 = {
//     x: 355.3634948730469,
//     y: 211.95895385742188
//   }
//   console.log(anchor1);
//   setProjectAnchor(anchor2);
//   setProjectDropDown(true);
    
//     }
    const projectTextHandler = (text)=>{
   
            setProject(text);
        if(text){
            setProjectDropDown(true);
            setProjectList(projectlistarr.filter((item)=>{return item.includes(text.toLowerCase())}));
        }
        else{
            setProjectList(projectlistarr);
            setProjectDropDown(false);
        }
    }
    
 
    const onChangeTime = (event, selectedDate) => {
        setShowTime(false);
        console.log(selectedDate.getHours());
        console.log(selectedDate.getMinutes());
        const timeString = `${selectedDate.getHours()} : ${selectedDate.getMinutes()}`
        SetTime(selectedDate)
        setTimeText(timeString);

    }
    const themes = useTheme();
    const onChangeDescription = (txt) => {

        if (txt.length > 300) {
            setDescError(true)
        }
        else {
            setDescription(txt.length);
        }
    }
    const FormAddHandler = () => {
        onAddForm();

    }
    const FormDeleteHandler = () => {
        onFormDelete();
    }
    // const layoutHandler = (event) => {
    //     const layout = event.nativeEvent.layout;
    //     console.log('height:', layout.height);
    //     console.log('width:', layout.width);
    //     console.log('x:', layout.x);
    //     console.log('submit form y:', layout.y);
    //     setYcord(layout.y);
        
    // }
    const menuLayoutHandler = (event)=>{
        const layout = event.nativeEvent.layout;
        console.log('height:', layout.height);
        console.log('width:', layout.width);
        console.log('x:', layout.x);
        console.log('y:', layout.y);
    }
    const minDate = new Date();
    new Date().setHours(9, 0, 0);
    const maxDate = new Date();
    new Date().setHours(18, 0, 0)
    return (
      
            <Card mode='elevated' style={{ width: '85%', height: dimension.height / 1.4, backgroundColor: systemTheme == 'dark' ? 'rgb(51, 51, 51)' : 'rgb(248, 248, 248)', position: 'relative', marginTop: 0, marginBottom: 0 }} >

                <Card.Content  >


                    {/* <Searchbar
        placeholder="Select Project"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon='bag-checked'

    /> */}

                   
                   
                      
                
                       {/* <TouchableOpacity onPress={onDropDownPressed}> */}
                     
                         
                       <Menu
                          visible={projectDropDown}
                          onDismiss = {closeProjectDropDown}
                          
                          anchor = {  <TextInput
                            label={'Select project'}
                            mode='outlined'
                            placeholder='type or select a project'
                            right={<TextInput.Icon icon={projectDropDown ? 'menu-up' : 'menu-down'} />}
                            value={project}
                            onChangeText={projectTextHandler}
                            
                           onLayout={menuLayoutHandler}
                           style={{position:'relative'}}
                            />}
                          style={{width:'75%'}}
                          anchorPosition='bottom'
                          
                          >
                         {(projectList.length>0)?projectList.map((item,i)=>{return (
                            <View  key={i} >
                                <Menu.Item onPress={ItemSelectHandler.bind(null,item)}title={item}/><Divider/>
                            </View>
                         )}):<Menu.Item title="No project found"/>}
                          </Menu>
                       {/* </TouchableOpacity> */}
                     
                     
            

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 30 }} ref={formRef}>
                        <Tooltip popover={<Text style={{ color: 'white' }}>Balance Hours</Text>} backgroundColor={themes.colors.primary}><Chip mode='outlined' id='c1' style={styles.chipStyle} elevated={true} textStyle={styles.chipText} >10:00</Chip></Tooltip>
                        <Tooltip popover={<Text style={{ color: 'white' }}>Total Hours</Text>} backgroundColor={themes.colors.primary}><Chip mode='outlined' id='c2' style={styles.chipStyle} elevated={true} textStyle={styles.chipText}>20:00</Chip></Tooltip>
                        <Tooltip popover={<Text style={{ color: 'white' }}>Hours</Text>} backgroundColor={themes.colors.primary}><Chip mode='outlined' id='c3' style={styles.chipStyle} elevated={true} textStyle={styles.chipText}>45:00</Chip></Tooltip>

                    </View>
                    <View style={styles.formItems}>
                        <View style={{ alignSelf: 'center' }}>
                            <Chip mode='flat' elevated={true} style={{ width: 100, height: 50 }} closeIcon='briefcase-clock-outline' onClose={() => { setShowTime(true) }} onPress={() => { setShowTime(true) }} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14 }}>{TimeText}</Chip>
                        </View>
                        <TextInput
                            mode="outlined"
                            label="Title"
                            placeholder="Enter the title"
                           
                        />
                        <View>
                            <TextInput
                                mode="outlined"
                                label="Description"
                                placeholder="write the description"
                                multiline={true}
                                onChangeText={onChangeDescription}
                                right={<TextInput.Affix text={`${description}/300`} />}
                                maxLength={300}
                                error={descError}
                                style={{ height: 100, justifyContent: 'flex-start' }}
                                contentStyle={{ justifyContent: 'flex-start' }}
                            />
                            <HelperText type='error' visible={descError}>please write description less then 300</HelperText>
                        </View>


                        {showTime && <DateTimePicker
                            value={Time}
                            mode='time'
                            onChange={onChangeTime}
                            display='spinner'
                            is24Hour={true}
                            minimumDate={minDate}
                            maximumDate={maxDate}


                        />}

                    </View>
                </Card.Content>
                <Card.Actions style={{position:'relative' }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        {deleteBtn ? <IconButton icon='trash-can-outline' mode='contained' containerColor={'#F5F5F5'} iconColor='red' size={26} onPress={FormDeleteHandler} /> : <View></View>}
                        <IconButton icon='plus' mode='contained' containerColor={themes.colors.primaryContainer} iconColor={themes.colors.primary} size={26} onPress={FormAddHandler} />
                    </View>

                </Card.Actions>
            </Card>
      
    )
}

const styles = StyleSheet.create({
    formItems: {
        rowGap: 30,

    },
    chipText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,

    },
    chipStyle: {
        width: 80,
        height: 50
    }
})