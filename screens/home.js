import React from 'react' ;
import { useNavigation } from '@react-navigation/native';
import { useState} from 'react'
import {
         SafeAreaView, 
         Text, 
         StyleSheet,
         View
        } 
        from 'react-native';

import Todo from './todo'

import Day from '../componets/day';
import Bt from '../componets/bt'


const Home = () => {




  const navigation = useNavigation();

  function press(){
    navigation.navigate( 'todo'
    )
  }

  function tests(){
    navigation.navigate('tests')
  }

  

    return (
    < SafeAreaView 
    style={styles.contain} 
    >

      
    <Bt txt='create' 
    onClick={press} 
    styl={styles.bt} 
    txtstyl={{color : "black"}} />
    <Bt txt='test' 
    onClick={tests}
    styl= {styles.bt} />
     </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    
    contain :{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color : 'black'
    },

    bt : {
      borderWidth : 1,
      borderColor : "black",
      color : "black",
      borderRadius : 8,
      width : 50,
      height : 30,

    }
       
  })
  export default Home
  
