import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";

export function login(currentState: UserModel, action: PayloadAction<UserModel>): UserModel {
    const newState = action.payload; // Here the payload is the new user logged-in.
    return newState;
}
export function logout(currentState: UserModel, action: PayloadAction): UserModel {
    return null;
}

