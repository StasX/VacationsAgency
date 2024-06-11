import { jwtDecode } from "jwt-decode";
import { UserModel } from "../Models/UserModel";
import { store, userActions } from "../Redux/state";
import { CredentialsModel } from "../Models/CredentialsModel";
import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class UserService {
    public constructor() {

        const token = localStorage.getItem("token"); 
        if (!token) return;
        const user = jwtDecode<{ user: UserModel }>(token).user; 
        const action = userActions.login(user);
        store.dispatch(action);
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials,{
            withCredentials: true,
          });
        const token = response.data;
        const user = jwtDecode<{ user: UserModel }>(token).user; 
        const action = userActions.login(user);
        store.dispatch(action); 
        localStorage.setItem("token", token);
    }

    public async logout(): Promise<void> {
        await axios.delete<string>(appConfig.logoutUrl);
        const action = userActions.logout();
        store.dispatch(action);
        localStorage.removeItem("token");
        
    }
}

export const userService = new UserService();
