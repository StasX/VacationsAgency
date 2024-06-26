import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";
import { TotalLikesModel } from "../Models/TotalLikesModel";
import { TotalUsersModel } from "../Models/TotalUsersModel";
import { VacationsStatisticsModel } from "../Models/VacationsStatisticsModel";
import { LikesStatisticsModel } from "../Models/LikesStatisticsModel";

// Login and Token Refresh
export function login(currentState: UserModel, action: PayloadAction<UserModel>): UserModel {
    const newState = action.payload;
    return newState;
}
// Logout
export function logout(currentState: UserModel, action: PayloadAction): UserModel {
    return null;
}
// Users count
export function members(currentState: TotalUsersModel, action: PayloadAction<TotalUsersModel>): TotalUsersModel {
    const newState = action.payload;
    return newState;
}
// Likes count
export function liked(currentState: TotalLikesModel, action: PayloadAction<TotalLikesModel>): TotalLikesModel {
    const newState = action.payload;
    return newState;
}

// Vacations statistics
export function vacationsStats(currentState: VacationsStatisticsModel, action: PayloadAction<VacationsStatisticsModel>): VacationsStatisticsModel {
    const newState = action.payload;
    return newState;
}
// Likes statistics
export function likedStats(currentState: LikesStatisticsModel[], action: PayloadAction<LikesStatisticsModel[]>): LikesStatisticsModel[] {
    const newState = action.payload;
    return newState;
}
