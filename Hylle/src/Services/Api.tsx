import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthorizationHeader } from "@/Services/ApiConfig"; // Certifique-se de importar a função correta aqui

const api = axios.create({
    baseURL: 'http://192.168.1.101:8080/',
    responseType: 'json',
    withCredentials: true,
});

// Adicione um interceptor para definir o cabeçalho "Authorization" em todas as requisições
api.interceptors.request.use(async (config) => {
    // Obtenha o token JWT da AsyncStorage
    const token = await AsyncStorage.getItem("@token");
    console.log(token)
    
    // Adicione o cabeçalho "Authorization" ao objeto de configuração
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
