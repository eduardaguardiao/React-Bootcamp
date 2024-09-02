import axios from "axios";

// url basica para todas as requisições
const api = axios.create({
    // baseURL: "https://66d6256af5859a7042687a0f.mockapi.io/music-box"
    baseURL: process.env.REACT_APP_API_URL
});

export default api;

