import axios from 'axios';

import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import TeamService from "../services/TeamService";
import {AuthResponse} from "../models/AuthResponse";
import {API_AUTH} from "../api";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(name: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(name, email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log("logout response:", response)
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
            
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_AUTH}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async votePlus(team: string, user: string) {
        try {
            const response = await TeamService.votePlus(team, user);
            console.log(response)
                        
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async voteMinus(team: string, user: string) {
        try {
            const response = await TeamService.voteMinus(team, user);
            console.log(response)
                        
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

}
