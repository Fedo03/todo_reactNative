import React from "react";
import {  
        Text, 
        StyleSheet,
        View,
        Button
        } from 'react-native';

   const Create = (prop) => {
    return (
     
        <View>
        <Button title={prop.text} onPress={prop.onClick} color={"orange"} />
        </View>
     
    )
   };

   export default Create