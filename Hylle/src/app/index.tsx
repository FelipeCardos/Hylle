import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Alert } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../Services/Api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
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
    <SafeAreaView className="flex-1 items-center justify-center bg-sky-700" >
      <Text>Username</Text>
      <TextInput
        placeholder="Username..."
        value={username}
        onChangeText={setUsername}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password..."
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={{ backgroundColor: 'gray', borderRadius: 5, width: '100%' }} onPress={() => handleLogin()} >
        <Text>
          Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 5 }} onPress={() => promptAsync()}>
        <Text>
          Sign in with Google
        </Text>
      </TouchableOpacity>
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
