import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";

const InvalidRoute = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", mx: "50px", my: "100px" }}>
                <ErrorOutlineIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                <Typography align="center" variant="h4" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500], my: "2rem" }}>
                    Opps, looks like theres nothing here yet!
                </Typography>
            </Box>
        </>
    );
};

export default InvalidRoute;
