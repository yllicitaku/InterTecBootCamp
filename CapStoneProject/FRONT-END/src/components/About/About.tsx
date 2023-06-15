import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import FormT from "./FormT";
import Questions from "./Questions";

const About = () => {
    return (
        <div className="head">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Questions />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <FormT />
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
