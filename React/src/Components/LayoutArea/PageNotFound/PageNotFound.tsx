import css from "./PageNotFound.module.css";
import { Link } from "react-router-dom";
import notFound from "../../../Assets/img/404.jpg"
import { Container, Typography } from "@mui/material";
export function PageNotFound(): JSX.Element {
    return (
        <Container maxWidth="xs" className={css.PageNotFound}>
            <Typography variant="h3" sx={{ mt: 10 }}>Page not found!</Typography>
            <img src={notFound} alt="Page not found" />
            <Typography>We sorry but requested page not found!<br />Please back to <Link to="/home">Home</Link>
            </Typography>
        </Container>
    );
}
