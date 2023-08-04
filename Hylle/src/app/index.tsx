// web 337910644768-64b91vfeqmtvb88auum58gi2o86rfg8k.apps.googleusercontent.com
// android 337910644768-v0b1opqtoitdebs9q21frlev6u4s4mr2.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { View, Text, Button } from 'react-native';
import LottieView from "lottie-react-native";
import { Redirect } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [ userInfo, setUserInfo ] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "337910644768-v0b1opqtoitdebs9q21frlev6u4s4mr2.apps.googleusercontent.com",
    webClientId: "337910644768-64b91vfeqmtvb88auum58gi2o86rfg8k.apps.googleusercontent.com"
  });

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowLogin(true);
    },2000)
    return () => clearTimeout(timer);
    },[])

  useEffect(()=>{
    halndleSignInWithGoogle();
  }, [response])

  async function halndleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if(!user){
      if(response?.type ==="success")
        await getUserInfo(response.authentication?.accessToken)
    }
    else{
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo =async (token: any) => {
    if (!token) return;
    try{
      const res = await fetch(
        "https://www.google.com/userinfo/v2/me",
        {
          headers:{Authorization: `Bearer ${token}`}
        }
      );
        const user = await res.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
    }catch(error){

    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
    {/* {showLogin ? ( */}
      <View>
        <Text>{JSON.stringify(userInfo)}</Text>
        <Button onPress={() => promptAsync()} title="Sign in with Google"/>
      </View>
    {/* ) :
     : (
       <LottieView
         source={require('../assets/loading.json')}
         autoPlay={true}
         loop={true}
         style={{ width: '100%', height: "auto" }}
       />  
     ) */}
    
  </View>
  )
}
