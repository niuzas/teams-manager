import $api from "../api";
import {AxiosResponse} from 'axios';
// import {AuthResponse} from "../models/response/AuthResponse";
import {ITeam} from "../models/ITeam";
import { API_TEAMS } from '../api';

export default class UserService {
    static fetchTeams(): Promise<AxiosResponse<ITeam[]>> {
        return $api.get<ITeam[]>(`${API_TEAMS}/`)
    }
}

