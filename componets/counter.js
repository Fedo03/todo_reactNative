import React, {useState, useEffect} from "react";
import { AppState,Text, View } from "react-native";
import CountDown from 'react-native-countdown-component'

const Count = (props) => {

    var date = props.time
   console.log(date)
   const [count, setCount] = useState(0)
   const [isActive, setIsActive] = useState(true)

   useEffect(() => {


    
const handleAppStateChange = (newState) => {
    if (newState === 'active') {
        setIsActive(true); 
        console.log("true")
    } else {
        setIsActive(false); 
        console.log("false")
    }
};

console.log('hey')
AppState.addEventListener('change', handleAppStateChange);
           
return () => {
    AppState.removeEventListener('change', handleAppStateChange);
}; },[]);

useEffect(() => {

  function calculations(){
   var curr = new Date()
   var currH = curr.getHours()
   var currM = curr.getMinutes()
  
 
   var dates = date.split(":")
   var dates1 = dates[1].split(" ")
   var hour = Number(dates[0]) 
   var min = Number(dates1[0])
   var m = dates1[1]

   if(m == "pm") {
    hour += 12
}

   var upMin = ((hour * 60) + min) 
   var uMin = ((currH * 60) + currM)
   var cdown = upMin - uMin
   
  const totalSec = cdown * 60

  setCount(totalSec)
  console.log(count + "count")

}

calculations();



    
        
    }, [date]);



    return (
    
       <View>
      <Text>
       { count && <CountDown 
            until={count}
            onFinish={()=> alert("add alarm")}
            size={20}
            timeToShow={['H','M','S']}
            digitalStyle={{backgroundColor:"rgb(255,255,255 )"}}
            /> }
           </Text>
       </View>
        
    )
}

export default Count;  