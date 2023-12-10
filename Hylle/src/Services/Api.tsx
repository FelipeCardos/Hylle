import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthorizationHeader } from "@/Services/ApiConfig"; // Certifique-se de importar a função correta aqui

const api = axios.create({
    baseURL: 'http://192.168.1.108:8080/',
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

export const API_GOOGLE_BOOKS_KEY = 'AIzaSyC4Q4_yiJPgDxY7jXjHlvL8fYAQIZMOevk';
export const GOOGLE_BOOKS_URL = 'https://www.googleapis.com/books';
export const GET_GOOGLE_BOOKS_BY_NAME_ENDPOINT = '/v1/volumes?q=';
export const GOOGLE_BOOKS_KEY_HEADER = '&key='+ API_GOOGLE_BOOKS_KEY;

export default api;
