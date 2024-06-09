import { useForm } from "react-hook-form";
import { useTitle } from "../../../Utils/UseTitle";
import css from "./login.module.css";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { send } from "process";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export function Login(): JSX.Element {
    useTitle("Login");
    const {register, handleSubmit, formState:{errors}} = useForm<CredentialsModel>();
    const navigate = useNavigate();
    async function send(credentials: CredentialsModel) {
        try {
            await userService.login(credentials);
            navigate("/home");
        }
        catch(err: any) {
        
        }
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: "20px",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(send)} sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...register('email', { required: 'Email is required' })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password', { required: 'Password is required', minLength: { value: 4, message: 'Password must be at least 4 characters' } })}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}