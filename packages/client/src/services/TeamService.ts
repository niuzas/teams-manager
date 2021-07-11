import $api from "../api";
import {AxiosResponse} from 'axios';
import {VoteResponse} from "../models/VoteResponse";
import {ITeam} from "../models/ITeam";
import { API_TEAMS } from '../api';

export default class UserService {
    static fetchTeams(): Promise<AxiosResponse<ITeam[]>> {
        return $api.get<ITeam[]>(`${API_TEAMS}/`)
    }

    static async vote(team: string, user: string): Promise<AxiosResponse<VoteResponse>> {
        return $api.post<VoteResponse>(`${API_TEAMS}/vote`, {team, user})
    }
}

