import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../Models/UserModel";
import { store } from "../Redux/state";

export function useRouteProtect(): void {
    const navigate = useNavigate();
    useEffect(() => {
        const user: UserModel = store.getState().user;
        if (!user || user?.role !== "Admin") {
            navigate("/login");
        }
    }, [navigate]);
}