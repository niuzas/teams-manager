import axios from 'axios';
import {AuthResponse} from "../models/AuthResponse";
// import {store} from "../index";
// import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:5000/api`
export const API_AUTH = `${API_URL}/auth`
export const API_USERS = `${API_URL}/users`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        console.log("Access token problem:", error.response.data.message)
        try {
            const response = await axios.get<AuthResponse>(`${API_AUTH}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            console.log("Refresh response:", response)
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Refresh token problem:', e);

        }
    }
    throw error;
})

export default $api;
