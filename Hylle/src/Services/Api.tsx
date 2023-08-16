import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.101:8080/',
    responseType:'json',
    withCredentials:true
});

export default api;