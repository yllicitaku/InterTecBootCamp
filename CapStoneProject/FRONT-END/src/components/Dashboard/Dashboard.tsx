import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useAppSelector } from "../../redux-toolkit/hooks";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { orange } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { server_ip } from "../../utils/Utilities";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";

const Dashboard = () => {
    const [google_user, set_google_user] = useState({ _id: "", googleId: "", email: "" });
    useEffect(() => {
        axios({
            method: "GET",
            url: `${server_ip}/guser`,
        }).then((data: any) => set_google_user(data.data[0]));
    }, []);
    console.log(google_user);
    const current_user = useAppSelector((state) => state.users.user);
    console.log(current_user);

    function createData(name: string, surname: string, email: string, password: string) {
        return { name, surname, email, password };
    }

    const rows = [createData(current_user.name, current_user.surname, current_user.email, current_user.password)];
    return (
        <>
            {current_user.name !== "" ? (
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <EmojiPeopleIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                        <Typography
                            align="center"
                            variant="h2"
                            sx={{
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "bold",
                                color: orange[500],
                                my: "2rem",
                                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                            }}
                        >
                            Welcome, {current_user.name}
                        </Typography>
                    </Box>
                    <Divider />
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "bold",
                            my: "2rem",
                            // fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                        }}
                    >
                        This is the information that is associated to your account:
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxWidth: { xs: 450, sm: 500, md: 600 }, mx: "auto" }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        Name
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        Surname
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        Email
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        Password
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.surname}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.password.substring(0, 16)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : google_user ? (
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <EmojiPeopleIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                        <Typography
                            align="center"
                            variant="h2"
                            sx={{
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "bold",
                                color: orange[500],
                                my: "2rem",
                                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                            }}
                        >
                            Welcome, Google User
                        </Typography>
                    </Box>
                    <Divider />
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "bold",
                            my: "2rem",
                            // fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                        }}
                    >
                        This is the information that is associated to your account:
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxWidth: { xs: 450, sm: 500, md: 600 }, mx: "auto" }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        googleId
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                                        Email
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell align="right">{google_user.googleId}</TableCell>
                                        <TableCell align="right">{google_user.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : (
                <Box sx={{ display: "flex", justifyContent: "center", mx: "50px", my: "100px" }}>
                    <ErrorOutlineIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                    <Typography
                        align="center"
                        variant="h4"
                        sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500], my: "2rem" }}
                    >
                        Opps, looks like you need to log in first!
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default Dashboard;
