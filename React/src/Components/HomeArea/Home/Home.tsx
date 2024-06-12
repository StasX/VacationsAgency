import stat from "../../../Assets/img/stat.png"
import { useTitle } from "../../../Hooks/useTitle";
import { useRouteProtect } from "../../../Hooks/useRouteProtect";
import { Box, Container, Grid, Typography } from "@mui/material";

export function Home(): JSX.Element {
    useTitle("Home");
    useRouteProtect();
    return (
        <Container maxWidth="xl" sx={{ mt: 5 }}>
            <Typography variant="h3">Explanation about the system.</Typography>
            <Grid container sx={{ mt: 10 }}>
                <Grid item md={4} sm={12} >
                    <Box sx={{ margin: "auto" }}>
                        <img src={stat} alt="Statistics" width={400} />
                    </Box>

                </Grid>
                <Grid item md={8} sm={12}>

                    <Typography>Another our system "Vacation agency" allows to user to like / unlike vacations.</Typography>
                    <Typography>Current our system display to administrators statistics about "Vacations agency".</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
