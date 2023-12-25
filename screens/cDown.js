import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from "react-native"

import {useState, useEffect} from "react"

import {
    useNavigation,
    useIsFocused ,
    useRoute 
   } from '@react-navigation/native';

import Count from "../componets/counter";

const CountDowns = () => {


    const [kill, setKill] = useState(true)
    const route = useRoute()
    var data = route.params?.data || {};





    const navigation = useNavigation();
    const isFocused = useIsFocused();
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('blur', () => {
            setKill(false)
            console.log('kill')
      });
  
     
      return unsubscribe;
    }, [navigation]);





    
    return (
        <SafeAreaView>
            <Text style={stl.name}>{data.txt}</Text>
            <Text style={stl.time} > {data.tm}</Text>
           <View> 
           { kill && <Count  time={data.tm} /> }
           
           </View>
            
        </SafeAreaView>
    )
}

var stl = StyleSheet.create({
    name : {
         
        fontSize : 30, 
        color : "grey",
        textAlign : "center",

        },
     time : {
        left : 140,
        top: 30,
        color : "grey",
        fontSize : 20
        }

  })




export default CountDowns;