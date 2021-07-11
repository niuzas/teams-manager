import $api from "../api";
import {AxiosResponse} from 'axios';
// import {AuthResponse} from "../models/response/AuthResponse";
import {IUser} from "../models/IUser";
import { API_USERS } from '../api';

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>(`${API_USERS}/`)
    }
}

