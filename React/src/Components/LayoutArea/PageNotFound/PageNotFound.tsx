import { Navigate } from "react-router-dom";
import css from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
import notFound from "../../../Assets/img/404.jpg"
export function PageNotFound(): JSX.Element {
    return (
        <div className={css.PageNotFound}>
            <h1>
                Page not found!
            </h1>
            <img src={notFound} alt="Page not found" />
            <p>We sorry but requested page not found!<br />Please back to <Link to="/home">Home</Link>
            </p>
            <p>
                <Link to="http://www.freepik.com">This image Designed by stories / Freepik</Link>
            </p>
        </div>
    );
}
