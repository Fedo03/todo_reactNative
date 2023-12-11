import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View 
} from "react-native"


const Todos = (props) => {
   return (

   <View style={styles.view}>
    <TouchableOpacity onPress={props.onClick}>

    <Text style={props.styl}>
    {props.text}
    </Text>
    </TouchableOpacity>
    
    <Text style={styles.times}> {props.time} </Text>
    

     </View>
   )
}

const styles = StyleSheet.create({
  view : {
    
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingLeft : 0,
    marginLeft : 0
  },
  times : {
  color : 'black',
  fontSize : 15

  }
})

export default Todos