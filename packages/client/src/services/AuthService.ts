import $api from "../api";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/AuthResponse";
import { API_AUTH } from '../api';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`${API_AUTH}/login`, {email, password})
    }

    static async registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`${API_AUTH}/registration`, {name, email, password})
    }

    static async logout(): Promise<void> {
        return $api.post(`${API_AUTH}/logout`)
    }

}

