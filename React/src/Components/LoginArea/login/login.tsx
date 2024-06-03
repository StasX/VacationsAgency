import { useForm } from "react-hook-form";
import { useTitle } from "../../../Utils/UseTitle";
import css from "./login.module.css";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { send } from "process";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";

export function Login(): JSX.Element {
    useTitle("Login");
    const {register, handleSubmit} = useForm<CredentialsModel>()
    const navigate = useNavigate()
    async function send(credentials: CredentialsModel) {
        try {
            await userService.login(credentials);
            navigate("/home");
        }
        catch(err: any) {
        }
    }
    
    return (
        <div className={css.login}>
            <form onSubmit={handleSubmit(send)}>
                <div>
                    <label>Email</label><input type="email" required />
                </div>
                <div>
                    <label>Password</label><input type="password" pattern=".{4,}" required />
                </div>
            </form>
        </div>
    );
}
