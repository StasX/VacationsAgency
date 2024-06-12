import { configureStore, createSlice } from "@reduxjs/toolkit";
import { liked, likedStats, login, logout, members, vacationsStats } from "./reducers";
import { UserModel } from "../Models/UserModel";
import { TotalLikesModel } from "../Models/TotalLikesModel";
import { TotalUsersModel } from "../Models/TotalUsersModel";
import { VacationsStatisticsModel } from "../Models/VacationsStatisticsModel";
import { LikesStatisticsModel } from "../Models/LikesStatisticsModel";

export type AppState = {
    user: UserModel;
    usersCalc: TotalUsersModel;
    likesCalc: TotalLikesModel;
    vacationsStat: VacationsStatisticsModel;
    likesStat: LikesStatisticsModel[];
};

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: { login, logout }
});

const usersCalcSlice = createSlice({
    name: "usersCalc",
    initialState: null,
    reducers: { members }
});

const likesCalcSlice = createSlice({
    name: "likesCalc",
    initialState: null,
    reducers: { liked }
});

const vacationsStatSlice = createSlice({
    name: "vacationsStat",
    initialState: null,
    reducers: { vacationsStats }
});
const likesStatSlice = createSlice({
    name: "likesStat",
    initialState: [],
    reducers: { likedStats }
});
export const userActions = userSlice.actions;
export const usersCalcActions = usersCalcSlice.actions;
export const likesCalcActions = likesCalcSlice.actions;
export const vacationsStatActions = vacationsStatSlice.actions;
export const likesStatActions = likesStatSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        user: userSlice.reducer,
        usersCalc: usersCalcSlice.reducer,
        likesCalc: likesCalcSlice.reducer,
        vacationsStat: vacationsStatSlice.reducer,
        likesStat: likesStatSlice.reducer,
    }
});