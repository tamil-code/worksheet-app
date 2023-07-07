import {  ScrollView, StyleSheet,  View ,TouchableOpacity,  useColorScheme} from 'react-native'
import React,{useState} from 'react'

import {DataTable,TextInput,Menu,Divider,Button} from 'react-native-paper'

import {DatePickerModal} from 'react-native-paper-dates'
const projectlistarr = ["web application","mobile application","wordpress","php application","code builder","react-native","flutter","AWS"]

export default function ProjectReport() {
  const systemTheme = useColorScheme();
  //menuHandling state
  const[showMenu,setShowMenu] = useState(false);
  const[menuAnchor,setMenuAnchor] = useState({x:0,y:0})
  const openMenu = ()=>{
    setShowMenu(true);
  }
 
  const closeMenu = ()=>{
    setShowMenu(false);
  }
  //daterange
  const[dateRange,setDateRange] = useState('');
  
  //custom daterange
  const[customRangeDatePicker,setCustomRangeDatePicker] = useState(false);
  const[customDateRange,setCustomDateRange] = useState({ startDate:undefined, endDate:undefined})



const onMenuIconPressed = (event)=>{
  const { nativeEvent } = event;
    const anchor1 = {
    x: nativeEvent.pageX,
    y: nativeEvent.pageY,
  };
  console.log(anchor1);
  const anchor = {
    x:  355.3634948730469,
    y: 207.06561279296875,
  };
  
  setMenuAnchor(anchor);
 openMenu();
}

//  const touchHandler = (event)=>{
//   const { nativeEvent } = event;
//   const anchor = {
//     x: nativeEvent.pageX,
//     y: nativeEvent.pageY,
//   };
//   console.log(anchor);
//  }

//custom date range handler

const onConfirmCustomRange = ({ startDate, endDate})=>{
    setCustomRangeDatePicker(false);
    let dateString = `${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getFullYear()} - ${endDate.getDate()}/${endDate.getMonth()+1}/${endDate.getFullYear()}`
    console.log("Start date: "+startDate);
    console.log("End date: "+endDate);
    console.log(dateString);
    setDateRange(dateString)
     setCustomDateRange({ startDate, endDate})
}


//dateRange select handler
const onSelectDateRange = (menuItem)=>{
  const date = new Date();
  let dateString = "";
 if(menuItem=='Today'){
   dateString = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}-${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
   setDateRange(dateString);
   closeMenu();
 }
 if(menuItem=='Yesterday'){
  dateString = `${date.getDate()-1}/${date.getMonth()+1}/${date.getFullYear()}-${date.getDate()-1}/${date.getMonth()+1}/${date.getFullYear()}`
  setDateRange(dateString);
  closeMenu();
 }
 if(menuItem=='Last 7 Days'){
  var priorDate = new Date(new Date().setDate(date.getDate() - 6));
  dateString = `${priorDate.getDate()}/${priorDate.getMonth()+1}/${priorDate.getFullYear()}-${date.getDate()-1}/${date.getMonth()+1}/${date.getFullYear()}`
  setDateRange(dateString);
  closeMenu();
 }
 if(menuItem=='Last 30 Days'){
  var priorDate = new Date(new Date().setDate(date.getDate() - 29));
  dateString = `${priorDate.getDate()}/${priorDate.getMonth()+1}/${priorDate.getFullYear()}-${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  setDateRange(dateString);
  closeMenu();
 }

 if(menuItem=='This Month'){
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  dateString = `${firstDay.getDate()}/${firstDay.getMonth()+1}/${firstDay.getFullYear()}-${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  setDateRange(dateString);
  closeMenu();
 }
 if(menuItem=='Last Month'){
  var firstDay = new Date(date.getFullYear(), date.getMonth()-1, 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() , 0);
  dateString = `${firstDay.getDate()}/${firstDay.getMonth()+1}/${firstDay.getFullYear()}-${lastDay.getDate()}/${lastDay.getMonth()+1}/${lastDay.getFullYear()}`;
  setDateRange(dateString);
  closeMenu();
 }
 if(menuItem=='Custom Range'){
   setCustomRangeDatePicker(true);
  closeMenu();
 }

}

//dynamic search dropdown
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
const focusHandler = (event)=>{
      setProjectDropDown(true);
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
  return (
    <ScrollView style={[styles.container,{backgroundColor:systemTheme=='dark'?'rgb(30, 30, 30)':'white'}]} contentContainerStyle={{  justifyContent:'center',
    alignItems:'center'}}>
            <View style={{width:'90%',gap:20,marginTop:20}} >
              
        <Menu
          visible={projectDropDown}
          onDismiss={closeProjectDropDown}

          anchor={<TextInput
            label={'Select project'}
            mode='outlined'
            placeholder='type or select a project'
            right={<TextInput.Icon icon={projectDropDown ? 'menu-up' : 'menu-down'} />}
            value={project}
            onChangeText={projectTextHandler}
            onFocus={focusHandler}
          
            
          />}
          style={{ width: '90%' }}
          anchorPosition='bottom'

        >
          {(projectList.length > 0) ? projectList.map((item, i) => {
            return (
              <View key={i} >
                <Menu.Item onPress={ItemSelectHandler.bind(null, item)} title={item} /><Divider />
              </View>
            )
          }) : <Menu.Item title="No project found" />}
        </Menu>
             
          <TouchableOpacity onPress={onMenuIconPressed}>

          <TextInput
            mode='outlined'
            label='Date range'
            editable={false}
            value={dateRange}
            onPressOut={onMenuIconPressed}
            right={<TextInput.Icon icon='calendar-month-outline' onPress={onMenuIconPressed}/>}
            >
                
            </TextInput>
          </TouchableOpacity>
              
            </View>
    <DataTable style={[styles.table,{backgroundColor:systemTheme=='light'?'rgb(248, 248, 248)':'rgb(33, 33, 33)'}]}  >
    
      <DataTable.Header style={styles.header}>
        <DataTable.Title textStyle={styles.tableHeadingText} style={styles.headerCell}>
                Project
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableHeadingText} style={styles.headerCell}>
                Taskdetails
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableHeadingText} style={styles.headerCell}>
                Hours
        </DataTable.Title>
       
      </DataTable.Header>

      
    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
     <View style={{width:400}}>
    
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>01/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 1</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell} textStyle={styles.taskDetails}>1</DataTable.Cell>
       
      </DataTable.Row>

 
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>02/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 2</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell} textStyle={styles.taskDetails}>2</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle} style={styles.dateCell}>03/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 3</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell} textStyle={styles.taskDetails}>3</DataTable.Cell>
       </DataTable.Row>
       <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>04/01/2023</DataTable.Cell>
        <DataTable.Cell  style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 4</DataTable.Cell>
        <DataTable.Cell  style={styles.statusCell} textStyle={styles.taskDetails}>4</DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>05/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 5</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>5</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>06/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 6</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>6</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>07/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 7</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>7</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>08/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 8</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>8</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>09/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 9</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>9</DataTable.Cell>
       </DataTable.Row>
      <DataTable.Row style={styles.rowStyle}>
        <DataTable.Cell textStyle={styles.dateStyle}  style={styles.dateCell}>10/01/2023</DataTable.Cell>
        <DataTable.Cell style={styles.taskCell} textStyle={styles.taskDetails}>taskDetails 10</DataTable.Cell>
        <DataTable.Cell style={styles.statusCell} textStyle={styles.taskDetails}>10</DataTable.Cell>
       </DataTable.Row>
       </View>
   
 

      {/* <DataTable.Pagination
        page={page}
        numberOfItemsPerPage={3}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1 of 3"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
        </ScrollView>
    </DataTable>
  
      <Menu
        visible={showMenu}
        style={{ width: '90%' }}
        onDismiss={() => { setShowMenu(false) }}
        anchor={menuAnchor}>

        <Menu.Item onPress={onSelectDateRange.bind(null, "Today")} title="Today" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "Yesterday")} title="Yesterday" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "Last 7 Days")} title="Last 7 Days" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "Last 30 Days")} title="Last 30 Days" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "This Month")} title="This Month" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "Last Month")} title="Last Month" />
        <Divider />
        <Menu.Item onPress={onSelectDateRange.bind(null, "Custom Range")} title="Custom Range" />
      </Menu>
      
      <DatePickerModal
        locale='en'
         mode="range"
         visible={customRangeDatePicker}
         onDismiss={()=>{setCustomRangeDatePicker(false)}}
         startDate={customDateRange.startDate}
         endDate={customDateRange.endDate}
         onConfirm={onConfirmCustomRange}
       />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
       
      
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
     borderColor:'grey',
     flexBasis:100
    },
    statusCell:{
      justifyContent:'center',
      fontFamily:'Poppins-Light',
      fontWeight:400,
      flexBasis:100
    },
    taskCell:{
      justifyContent:'center',
      borderRightWidth: 1,
      borderColor:'grey',
      
     flexBasis:200
    
    },
    rowStyle:{
      borderColor:'black',
      borderBottomWidth:1,
      borderLeftWidth:0,
      borderRightWidth:0,
      flex:1,
      height:50,
     width:'100%'
    },

    taskDetails:{
      fontFamily:'Poppins-Light',
      fontWeight:400,
    }
    

})