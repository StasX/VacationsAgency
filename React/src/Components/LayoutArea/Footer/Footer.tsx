import { useState, useEffect } from "react";
import css from "./Footer.module.css";

export function Footer(): JSX.Element {
    const [year, setYear] = useState<number>(2024);

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    }, []);

    return (
        <div className={css.Footer}>
            All rights reserved by Stanislav Mestechkin {year}&copy;
        </div>
    );
}