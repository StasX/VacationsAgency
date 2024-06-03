import { Navigate, Route, Routes } from "react-router-dom";
import css from "./Routing.module.css";
import { Login } from "../../LoginArea/login/login";
import { Home } from "../../HomeArea/Home/Home";
import { Statistics } from "../../StatisticsArea/Statistics/Statistics";
import { About } from "../../AboutArea/About/About";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export function Routing(): JSX.Element {
    return (
        <div className={css.Routing}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
