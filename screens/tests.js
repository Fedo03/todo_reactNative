import React, { useState, useEffect } from 'react';
import { AppState, View, Text, SafeAreaView , Button} from 'react-native';
var Sound = require('react-native-sound')


const Tests = () => {

  function play() {
  try {
  //SoundPlayer.playSoundFile('./John Cena Theme Song- The Time Is Now','mp3')
  } catch (error) {
    console.log("err bro :" + error)
  }
  }
  
  return (
    <SafeAreaView>
      <View>
      <Button onPress={play}  title="play"/>
      </View>
    </SafeAreaView> 
  );
};

export default Tests;
