import { Routes } from './src/Routes';
import { View} from 'react-native';
import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {LoginPage} from './src/Pages/Login/LoginPage';

export default function App() {
const [showLogin, setShowLogin] = useState(false);

useEffect(()=>{
  const timer = setTimeout(()=>{
    setShowLogin(true);
  },2000)

  return () => clearTimeout(timer);
},[])
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {showLogin ? (
      <View>
        <LoginPage/>
      </View>
    ) : (
      <LottieView
        source={require('./assets/loading.json')}
        autoPlay={true}
        loop={true}
        style={{ width: '80%' }}
      />
    )}
  </View>
);
}
