import React, { useEffect } from 'react';

import {
     useNavigation,
     useFocusEffect ,
     useRoute 
    } from '@react-navigation/native';

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

    const navigation = useNavigation()
    const route = useRoute()
    
    const  [todo, setTodo] = useState([])
    const [text, setText] = useState()
    const [item, setItem] = useState([])
    const [timeTodo, setTimeTodo] = useState([])
    const [time, setTime] = useState(new Date())
    const [disp, setDisp] = useState(false)
    const [clear, setClear] = useState()
    const [timeTxt, setTimeTxt] = useState("12:00 pm")

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

    useEffect(()=> {
     console.log("hello")
    }, )  


    return (
        <SafeAreaView>
            <ScrollView>

        < View style={styles.vtime}>
                
            {   
            
                todo.map(
                     (item,index)=>{        
                    return (
                        <Todos 
                        text={item.txt} 
                        key={index} 
                        styl={styles.lists}
                       onClick={() => nav(item)}
                        time={item.tm}
                        
                        />
 
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
        <Text style={{color :'black'}}>{timeTxt}</Text>
    </TouchableOpacity>

    {
        
        disp &&
        <DateTimePicker 
                mode='time'
                value={time}
                display='spinner'
                onChange={times} />
        
    }

</View>

    
      
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