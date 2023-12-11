import React from 'react'

import {
  AppState,
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    

} from 'react-native'

import CountDown from 'react-native-countdown-component'

import {useState, useEffect } from 'react'


const Tests = () => {



      
     const [count, setCount] = useState(10)
     const [aState, setAstate] = useState(AppState.currentState)
     const [mount, setMount] = useState(true)

     useEffect(()=> {
       setCount(15)
     },[count] )
         

     

      function ev(lis) {
        console.log(lis);
        
        if(AppState.match(/inactive|background/) && lis === 'active') {
          setMount(true)
        } else if(AppState === 'active' && lis.match(/inactive|background/)){
          setMount(false)
        }

        setAstate(lis)
      }


      useEffect(()=> {
     const listen = AppState.addEventListener("change", ev)

     return (
    
     listen.remove()
     
      ) 

     }, [aState])

     function done() {
      alert("add alarm") ;
    
     }
     
  return (

      <SafeAreaView>
        <View>
      <Text>
       { mount && <CountDown 
            until={count}
            onFinish={done}
            size={20}
            timeToShow={['H','M','S']}
            digitalStyle={{backgroundColor:"rgb(255,255,255 )"}}
            /> }
           </Text>
       </View>
       <Text style={{color:'black'}}>{aState}</Text>
        </SafeAreaView>

  )

}

export default Tests