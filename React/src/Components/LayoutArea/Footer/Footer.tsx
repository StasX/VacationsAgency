import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

export function Footer(): JSX.Element {
    const [year, setYear] = useState<number>(2024);

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear());
    }, []);

    return (
            <Typography sx={{textAlign:"center",pt:5}}>All rights reserved by Stanislav Mestechkin {year}&copy;</Typography>
    );
}