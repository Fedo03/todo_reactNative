import React, { useState, useEffect } from 'react';
import { AppState, View, Text, SafeAreaView } from 'react-native';



const Tests = () => {
  const [count, setCount] = useState(2000);
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
      // Timer has reached zero, you may handle this condition here
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: 'black' }}>
          {hour.toString().padStart(2, '0')} : {min.toString().padStart(2, '0')} :{' '}
          {sec.toString().padStart(2, '0')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Tests;
