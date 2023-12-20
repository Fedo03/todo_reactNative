import React, { useState, useEffect } from 'react';
import { AppState, View, Text, SafeAreaView } from 'react-native';
import SoundPlayer from 'react-native-sound-player';


const Tests = () => {

  SoundPlayer.playSoundFile('John Cena Theme Song- The Time Is Now','mp3')
  
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: 'black' }}>
          
        </Text>
      </View>
    </SafeAreaView> 
  );
};

export default Tests;
