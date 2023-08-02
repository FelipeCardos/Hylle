import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { View } from 'react-native';
import LottieView from "lottie-react-native";

import { LoginPage } from './src/Pages/Login';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowLogin(true);
    },2000)
    return () => clearTimeout(timer);
    },[])

  return (
    <View className="flex-1 items-center justify-center bg-white">
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
  )
}
