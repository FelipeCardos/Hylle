import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, TextInput, Alert, View, Image } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../Services/Api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link, useRouter} from 'expo-router';
WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "337910644768-v0b1opqtoitdebs9q21frlev6u4s4mr2.apps.googleusercontent.com",
    webClientId: "337910644768-64b91vfeqmtvb88auum58gi2o86rfg8k.apps.googleusercontent.com"
  });
  useEffect(() => {
    checkAuthenticatedUser();
  }, []);

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success" && response?.authentication?.accessToken) {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }
  async function checkAuthenticatedUser() {
    const userToken = await AsyncStorage.getItem('@token');
    const user = await AsyncStorage.getItem('@user');
    
    if (userToken && user) {
      // Redirect the user to a specific route if authenticated
      useRouter().replace('/(tabs)');
    }
  }


  async function getUserInfo(token: string) {
    try {
      const res = await fetch(
        "https://www.google.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const user = await res.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
      useRouter().replace('/(tabs)');
    } catch (error) {
      // Tratar erros de requisição
      console.error("Erro ao obter informações do usuário:", error);
    }
  }

  async function handleLogin() {
    if (password === "") {
      Alert.alert("Password needed!");
      return;
    }

    try {
      const requestBody = { username: username, password: password };
      const response = await api.post("/oauth/login", requestBody);

      if (response.status === 200) {
        // Login bem-sucedido
        const responseData = response.data;
        console.log("Login successful:", responseData);
        // Após receber o token JWT, guardo token no armazenamento interno do dispositivo
        await AsyncStorage.setItem('@token', JSON.stringify(responseData.token))
        // Guardo informações do utilizador
        await AsyncStorage.setItem('@user', JSON.stringify(responseData.user));

      useRouter().replace('/(tabs)');


        // Chamada para obter os dados do usuário
      } else {
        // Tratar erros de autenticação
        console.log("Authentication failed");
      }
    } catch (error) {
      // Tratar erros de requisição
      console.error("Error during login:", error);
    }
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-mainBlue" >
      <View>
        <Image source={require('../assets/logo.jpeg')} />
      </View>
      <View className='w-3/4 my-0.5'>
        {/** INPUT LOGIN AREA */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className='placeholder:italic 
                   placeholder:text-slate-400 
                   block 
                   bg-white 
                   w-full 
                   rounded-md 
                   py-2 
                   pl-5 
                   pr-3'
      />
      </View>
      <View className='w-3/4 my-0.5'>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className='placeholder:italic 
                   placeholder:text-slate-400
                   block
                  bg-white 
                   w-full 
                   rounded-md 
                   py-2 
                   pl-5 
                   pr-3'
      />
      </View>
      <View className='w-3/4 mt-3'>
      <TouchableOpacity onPress={() => handleLogin()}
                        className='bg-lightGold
                                   my-05
                                   w-full
                                   py-3
                                   rounded-md'>
        <Text className='text-darkBlue
                         text-xl
                         text-center'>
          Sign in
        </Text>
      </TouchableOpacity>
      </View>
      <View className='w-3/4 mt-3 mb-4'>
      <TouchableOpacity onPress={() => promptAsync()} 
                        className='bg-red
                                     my-0.5
                                     w-full
                                     py-3
                                     rounded-md'>
        <Text className='text-white
                         text-xl
                         text-center'>
          Sign in with Google
        </Text>
      </TouchableOpacity>
      </View>
        <Link href={'/Register'} asChild>
          <TouchableOpacity >
            <Text>
              Create Account
            </Text>
          </TouchableOpacity>
        </Link>
    </SafeAreaView>
  )
}
