import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { userService } from "./UserService";

class StatisticsService {
    protected token: string;
    protected canRefreshToken: boolean;
    protected canGoToLogin: boolean;
    public constructor() {
        this.token = localStorage.getItem("token");
        this.canRefreshToken = true;
        this.canGoToLogin = true;

    }
    public async getUsersCount(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.usersCountUrl, { withCredentials: true, headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err: any) {
            if (err?.response?.status === 406 && this.canRefreshToken) {
                this.refreshToken();
            } else if (err?.response?.status === 401 && this.canGoToLogin) {
                this.goToLogin();
            }
        }
    }
    public async getVacationsStatistics(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.vacationsStatisticsUrl, { withCredentials: true, headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err: any) {
            if (err?.response?.status === 406 && this.canRefreshToken) {
                this.refreshToken();
            } else if (err?.response?.status === 401 && this.canGoToLogin) {
                this.goToLogin();
            }
        }
    }
    public async getLikesCount(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.likesCountUrl, { withCredentials: true, headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err: any) {
            if (err?.response?.status === 406 && this.canRefreshToken) {
                this.refreshToken();
            } else if (err?.response?.status === 401 && this.canGoToLogin) {
                this.goToLogin();
            }
        }
    }
    public async getLikesStatistics(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.likesStatisticsUrl, { withCredentials: true, headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err: any) {
            if (err?.response?.status === 406 && this.canRefreshToken) {
                this.refreshToken();
            } else if (err?.response?.status === 401 && this.canGoToLogin) {
                this.goToLogin();
            }
        }
    }
    private refreshToken() {
        if (!this.canRefreshToken) return;
        this.canRefreshToken = false;
        userService.refreshToken();
        this.token = localStorage.getItem("token");
        this.getLikesCount();
        this.getLikesStatistics();
        this.getUsersCount();
        this.getVacationsStatistics();
        this.canRefreshToken = true;
    }
    private goToLogin() {
        if (!this.canGoToLogin) return;
        this.canGoToLogin = false;

        userService.logout();
        window.location.href = `${window.location.origin}/login`;
        this.canGoToLogin = true;
    }
}

export const statisticsService = new StatisticsService();
