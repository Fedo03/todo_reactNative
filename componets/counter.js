import React, {useState, useEffect} from "react";
import {Alert,SafeAreaView,Text, View, StyleSheet } from "react-native";
import CountDown from 'react-native-countdown-component'

const Count = (props) => {

    var date = props.time
   console.log(date)
  

   var curr = new Date()
   var currH = curr.getHours()
   var currM = curr.getMinutes()
  
 
   var dates = date.split(":")
   var dates1 = dates[1].split(" ")
   var hours = Number(dates[0]) 
   var mins = Number(dates1[0])
   var m = dates1[1]

   if(m == "pm") {
    hours += 12
   }

   var upMin = ((hours * 60) + mins) 
   var uMin = ((currH * 60) + currM)
   var cdown = upMin - uMin
   
  const totalSec = cdown * 60

  const [count, setCount] = useState(totalSec);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let remainingSeconds = count;

    const hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds %= 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    setHour(hours);
    setMin(minutes);
    setSec(seconds);

    if (count <= 0) {
     alert("add an alarm")
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <SafeAreaView>
      <View style={styl.txt}>
        <Text style={{ color: 'black' , fontSize 50}}>
          {hour.toString().padStart(2, '0')} : {min.toString().padStart(2, '0')} :{' '}
          {sec.toString().padStart(2, '0')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styl = StyleSheet.create({
  txt :{
    color : black,
    height 50,
    weidth : 100,
    left : 80,
    top: 250,
  }
})

export default Count;  