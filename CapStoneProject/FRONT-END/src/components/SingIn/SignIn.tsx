import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, Link, Typography } from "@mui/material";
import { ColorButton } from "../../utils/Utilities";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { useState } from "react";
import { dashboard, signIn } from "../../redux-toolkit/UserSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const current_user = useAppSelector((state) => state.users.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handle_change = (e: any, field: string) => {
        if (field === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };
    const submit_handler = (e: any) => {
        const login_user = {
            email: email,
            password: password,
        };
        dispatch(signIn(login_user)).then(() => {
            console.log(current_user);
            dispatch(dashboard(current_user.token)).then(() => {
                navigate("/dashboard");
            });
        });
        e.preventDefault();
    };
    return (
        <Box component="form" noValidate autoComplete="off">
            <Box sx={{ mx: "auto", mt: "50px", mb: "150px", width: "50%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h4" sx={{ mb: "2rem", fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}>
                        Sign In
                    </Typography>
                </Box>
                <Box>
                    <TextField
                        fullWidth
                        margin="normal"
                        required
                        id="email-input"
                        label="Email Address"
                        onChange={(e) => handle_change(e, "email")}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        required
                        type="password"
                        id="password-input"
                        label="Password"
                        onChange={(e) => handle_change(e, "password")}
                    />
                </Box>
                <FormControlLabel sx={{ mt: "0.5rem" }} control={<Checkbox size="medium" />} label="Remember me" />
                <ColorButton size="large" sx={{ mt: "2rem", width: "100%" }} variant="contained" onClick={(e) => submit_handler(e)}>
                    sign in
                </ColorButton>
                <Link sx={{ float: "left", mt: "2rem" }} href="/signup">
                    Don't have an account? Sign Up
                </Link>
            </Box>
        </Box>
    );
};

export default SignIn;
