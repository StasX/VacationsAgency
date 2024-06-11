import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class StatisticsService {
    protected token: string;
    public constructor() {
        this.token = localStorage.getItem("token");
    }
    public async getUsersCount(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.usersCountUrl, { headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err) {
            return err;
        }
    }
    public async getVacationsStatistics(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.vacationsStatisticsUrl, { headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err) {
            return err;
        }
    }
    public async getLikesCount(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.likesCountUrl, { headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err) {
            return err;
        }
    }
    public async getLikesStatistics(): Promise<any> {
        if (!this.token) return;
        try {
            const response = await axios.get(appConfig.likesStatisticsUrl, { headers: { "Authorization": this.token } });
            return response?.data;
        } catch (err) {
            return err;
        }
    }
}

export const statisticsService = new StatisticsService();
