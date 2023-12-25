import React, { useEffect } from 'react';

import {
     useNavigation,
     useFocusEffect ,
     useRoute 
    } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import {  GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swipeable} from "react-native-swipeable"

import {
    View,
    Text,
    Button,
    TextInput, 
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ScrollView
      } from 'react-native'

import DateTimePicker from "@react-native-community/datetimepicker";


import Todos from "../componets/todos"
import Bt from '../componets/bt'
import CountDowns from './cDown';
import { useState } from 'react';



  
const Todo = () => {



    const storeData = async (key,value) => {
        var strNo = String(key)
        var str = JSON.stringify(value)
       
       try {
            await AsyncStorage.setItem(strNo,str)
        } catch (e) {
           console.log("not working")
    }
    }

    const fetchData = async () => {

        try{
        
     const key = await AsyncStorage.getAllKeys()
     const result = await AsyncStorage.multiGet(key)
     var resultss = result.map(([,value]) => value)

     const results = JSON.parse(resultss)
     if(results) {
        setTodo(results)
        console.log(results + "hey")
    } else {
    console.log("no stored data")
    }
      
        } catch (e){
            console.log(e)
        }

        

    }
/*
    const clears = async () => {
        try {
            const key = await AsyncStorage.clear()
        } catch (e) {
            console.log(e)
        }

    } */

 

    const navigation = useNavigation()
    const route = useRoute()
    
    const  [todo, setTodo] = useState([])
    const [text, setText] = useState()
    const [item, setItem] = useState([])
    const [timeTodo, setTimeTodo] = useState([])
    const [time, setTime] = useState(new Date())
    const [disp, setDisp] = useState(false)
    const [clear, setClear] = useState()
    const [timeTxt, setTimeTxt] = useState("23:59 pm")

    function nav(item){
        
            console.log(item)
        navigation.navigate('countDown', {data : item} )
        
    }

  
   
    const displa = (e) => {
        setDisp(!disp)
        console.log(disp)
    }

    function times(event ,selectedValue) {
        var chosenTime = selectedValue || time
        setTime(chosenTime)
        setTimeTxt(chosenTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        setDisp(false)
    }

        function add() {

         
            console.log(text)
            
            setItem([...item , text])
            setTimeTodo([...timeTodo , time])
            console.log(item)
            console.log(timeTodo)
            const newTodo = {
                txt : text,
                tm : timeTxt
            }
            setTodo([...todo, newTodo])
            console.log(todo)

            
            
       
        }

   // useEffect(()=> {
   // fetchData()
   // }, [])  
   /* useEffect(() => {
        clears()
      },) */
function dispSwipe() {
    <View>
        <Text style={{color:"black"}}>
            DONE
        </Text>
    </View>
}

function onDisp(key,item) {
    console.log(key + ": "+ item + " is deleted")
}

    return (
        <SafeAreaView>
            <ScrollView>

        < View style={styles.vtime}>
                
            {   
            
                todo.map(
                    
                     (item,index)=> {   
                        
                        
                       // storeData(index,item)     
                    return (
                 //  <Swipeable
                 //  renderLeftActions={dispSwipe}
                // onSwipeableLeftOpen={onDisp(index,item)}
                 // >

                        <Todos 
                        text={item.txt} 
                        key={index} 
                        styl={styles.lists}
                       onClick={() => nav(item)}
                        time={item.tm}
                        />

                  // </Swipeable>
 
                    )

                })
  
            }
        </View>
        
     <View style={styles.inpView}>

    <TextInput 
    value={clear}
    style={styles.inp} 
    onChangeText={(inputText) => {
    setText(inputText)
    }} />

    <TouchableOpacity onPress={displa}>
        < Text style={{color :'black' }}>{timeTxt}</Text>
    </TouchableOpacity>

    {
        
        disp &&
        < DateTimePicker 
                mode='time'
                value={time}
                display='spinner'
                onChange={times} />
        
    }

< / View >

    
      
   < Bt txt='add' onClick={add} styl={styles.bt}/> 
  

   </ScrollView>
    </SafeAreaView>
    
    )}
    
    const styles = StyleSheet.create({
        bt : {
            backgroundColor: "rgba(105,105,105,0.5)",
            width : 50,
            height : 50,
            borderWidth : 2,
            borderRadius : 10,
            left : 130,
            marginTop : 10
            


        },
        
        lists : {
            color:"black",
            backgroundColor : "rgba(105,105,105,0.5)",
            height : 50,
            marginTop : 10,
            borderWidth : 2,
            borderColor : "rgba(144,238,144,0.5)",
            marginLeft :0,
            paddingLeft: 0,
            width: 300

        },

        inp : {
            
                color:'black',
             backgroundColor : "white",
             marginTop : 10,
             width : 300,
             marginLeft :0,
             borderWidth : 2,
             borderColor :  "rgba(144,238,144,0.5)",

               
            
        },

        inpView : {

              flexDirection: 'row', 
              justifyContent: 'space-around', 
              alignItems: 'center',
              paddingLeft : 0,
              color : 'black'
            
        
        },
        vtime : {
            paddingLeft : 0,
            marginLeft : 0,
            
        }
    })
    
      
       

export default Todo