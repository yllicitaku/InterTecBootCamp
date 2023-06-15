import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Link, Typography } from "@mui/material";
import { ColorButton } from "../../utils/Utilities";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { useState } from "react";
import { signUp } from "../../redux-toolkit/UserSlice";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handle_change = (e: any, field: string) => {
        if (field === "name") {
            setName(e.target.value);
        } else if (field === "surname") {
            setSurame(e.target.value);
        } else if (field === "email") {
            setEmail(e.target.value);
        } else if (field === "password") {
            setPassword(e.target.value);
        } else {
            setConfirm(e.target.value);
        }
    };
    const submit_handler = (e: any) => {
        const new_user = {
            _id: "",
            name: name,
            surname: surname,
            email: email,
            password: password,
        };
        if (password === confirm) {
            dispatch(signUp(new_user)).then(() => {
                alert("succesfully signed up");
                navigate("/signin");
            });
        } else {
            alert("passwords dont match");
        }
        e.preventDefault();
    };
    return (
        <>
            <Box component="form" noValidate autoComplete="off">
                <Box sx={{ mx: "auto", mt: "50px", mb: "150px", width: { xs: "95%", sm: "70%", md: "50%" } }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h4" sx={{ mb: "2rem", fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}>
                            Sign Up
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <TextField
                            sx={{ width: "50%", mr: "0.5rem" }}
                            required
                            id="name-input"
                            label="First Name"
                            onChange={(e) => handle_change(e, "name")}
                        />
                        <TextField
                            sx={{ width: "50%", ml: "0.5rem" }}
                            required
                            id="surname-input"
                            label="Last Name"
                            onChange={(e) => handle_change(e, "surname")}
                        />
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
                        <TextField
                            fullWidth
                            margin="normal"
                            required
                            type="password"
                            id="password-confirm"
                            label="Confirm Password"
                            onChange={(e) => handle_change(e, "")}
                        />
                    </Box>
                    <ColorButton size="large" sx={{ mt: "2rem", width: "100%" }} variant="contained" onClick={(e) => submit_handler(e)}>
                        sign up
                    </ColorButton>
                    <Link href="http://localhost:3300/auth/google">
                        <Button
                            size="large"
                            sx={{ mt: "1rem", width: "100%" }}
                            variant="contained"
                            startIcon={<GoogleIcon />}
                            // onClick={(e) => go_to_google(e)}
                        >
                            {" "}
                            sign up with google
                        </Button>
                    </Link>
                    <Link href="/signin" sx={{ float: "right", mt: "2rem" }}>
                        Already have an account? Sign in
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;
