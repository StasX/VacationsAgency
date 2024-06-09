
import { useTitle } from "../../../Utils/UseTitle";
import { Container, Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import css from "./About.module.css";

export function About(): JSX.Element {
    useTitle("About...");
    const frontEndTech: string[] = [
        "React",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "Material UI"
    ];
    const backEndTech: string[] = [
        "Flask",
        "Django",
        "Python",
        "MySQL",
        "Docker",
        "AWS"
    ];
    return (
        <Container className={css.About} maxWidth="md">
            <Typography variant="h3" gutterBottom>
                About me:
            </Typography>
            <Typography variant="body1" paragraph>
                My name is Stanislav Mestechkin, and I am a full stack developer...
                I have extensive experience developing web applications, and I am responsible for all stages of the project - from planning and development to testing and technical support.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Tools and Technologies Used in current project:
            </Typography>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Typography variant="h6">Front End:</Typography>
                    <List>
                        {frontEndTech.map((tech,index) => (
                            <ListItem key={index}>
                                <ListItemText primary={tech} style={{ textAlign: 'center' }} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Typography variant="h6">Back End:</Typography>
                    <List>
                    {backEndTech.map((tech,index) => (
                            <ListItem key={index}>
                                <ListItemText primary={tech} style={{ textAlign: 'center' }} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}