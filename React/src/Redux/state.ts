import { configureStore, createSlice } from "@reduxjs/toolkit";
import {  login, logout } from "./reducers";
import { UserModel } from "../Models/UserModel";

export type AppState = {
    user: UserModel;
};
 
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: { login, logout }
});
export const userActions = userSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        user: userSlice.reducer
    }
});