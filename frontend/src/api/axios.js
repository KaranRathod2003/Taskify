import axios from "axios";

const API = axios.create({
    baseURL : import.meta.env.VITE_API_URL || "https://taskify-backend-three.vercel.app/api/v1",
    withCredentials : true
}); 

API.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})
console.log(import.meta.env.VITE_API_URL )
export default API;