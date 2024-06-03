import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export function Navbar(): JSX.Element {
    return window.location.pathname.match("/login") ? (<nav className={css.Navbar}></nav>) : (
        <nav className={css.Navbar}>
            <ul>
                <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            </ul>
        </nav>
    );
}
