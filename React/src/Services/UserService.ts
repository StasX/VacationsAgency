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
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Create action object containing the logged-in user: 
        const action = userActions.login(dbUser);

        // Save logged-in user in global state:
        store.dispatch(action);
    }

    public async login(credentials: CredentialsModel): Promise<void> {

        // Send credentials to backend:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        // Extract token from axios response: 
        console.log(response.data);
        const token = response.data;

        // Extract user from token:
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Create action object containing the logged-in user: 
        const action = userActions.login(dbUser);

        // Save logged-in user in global state:
        store.dispatch(action);

        // Save token to local storage: 
        localStorage.setItem("token", token);
    }

    public logout(): void {
        // Create action object for logout:
        const action = userActions.logout();

        // Logout user from global state:
        store.dispatch(action);

        // Remove token from local storage: 
        localStorage.removeItem("token");
    }

}

export const userService = new UserService();
