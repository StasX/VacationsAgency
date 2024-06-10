import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../../Assets/img/logo.png"
import { Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { store } from '../../../Redux/state';
import { userService } from '../../../Services/UserService';



export function Header(): JSX.Element {
    const pages = [{ text: "Home", url: "/home" }, { text: "Statistics", url: "/statistics" }, { text: "About", url: "/about" }];

    const location = useLocation();
    const navigate = useNavigate();


    function handleNavigation(url: string){
        navigate(url);
    };
    function logout(){
        userService.logout();
        navigate("/login");
    }

    const[name,setName]=useState<string>("Guest");

    useEffect(()=>{
        const user=store.getState().user;
        setName(`${user?.firstName} ${user?.lastName}`);
    },[]);

    return location.pathname.match("/login") ? (<AppBar position="static"></AppBar>) : (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="Logo" />

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handleNavigation(page.url)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={10}>
                                <Typography>{name}</Typography>
                                <Typography onClick={logout} sx={{cursor:"pointer"}}>Logout</Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <AccountCircle sx={{fontSize:"30pt"}}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}