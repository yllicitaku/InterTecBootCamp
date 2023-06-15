import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, Link } from "@mui/material";
import { useLocation } from "react-router";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { fontSize } from "@mui/system";
import { ColorButton, server_ip } from "../../utils/Utilities";
import axios from "axios";

export default function FinalCheckout() {
    return (
        <Grid container>
            <Grid xs={12} item display="flex" alignItems="center" justifyContent="center">
                <DoneAllIcon color="success" sx={{ fontSize: "6rem" }} />
            </Grid>
            <Grid xs={12} item display="flex" alignItems="center" justifyContent="center">
                <Typography variant="overline" align="center" sx={{ color: "green", fontSize: "3rem" }}>
                    You have successfully paid your order
                </Typography>
            </Grid>
            <Grid xs={12} item display="flex" alignItems="center" justifyContent="center">
                <Typography variant="overline" sx={{ color: "black", fontSize: "1rem" }}>
                    Thank you!
                </Typography>
                <Link href="http://localhost:3300/invoices">
                    <ColorButton sx={{ ml: "2rem" }} size="small" variant="contained">
                        See your invoice
                    </ColorButton>
                </Link>
            </Grid>
        </Grid>
    );
}
