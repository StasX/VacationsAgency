import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";
import { TotalLikesModel } from "../Models/TotalLikesModel";
import { TotalUsersModel } from "../Models/TotaUsersModel";
import {VacationsStatisticsModel} from "../Models/VacationsStatisticsModel";
import { LikesStatisticsModel } from "../Models/LikesStatisticsModel";

export function login(currentState: UserModel, action: PayloadAction<UserModel>): UserModel {
    const newState = action.payload;
    return newState;
}
export function logout(currentState: UserModel, action: PayloadAction): UserModel {
    return null;
}
// Users cpount
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
