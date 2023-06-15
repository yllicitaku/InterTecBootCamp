import { Button, Grid, TextField, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import { ColorButton } from "../../utils/Utilities";
import "./About.css";

export default function FormT() {
    return (
        <>
            <form>
                <Grid container sx={{ mt: 5 }}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: "white" }}>
                            Your Feedback
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        display="flex"
                        alignItems="center"
                        sx={{ justifyContent: { xs: "center", sm: "center", md: "flex-start" } }}
                    >
                        <TextField id="standard-basic" label="FirstName" variant="standard" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        display="flex"
                        alignItems="center"
                        sx={{ justifyContent: { xs: "center", sm: "center", md: "flex-end" } }}
                    >
                        <TextField id="standard-basic" label="LastName" variant="standard" />
                    </Grid>
                    <Grid sx={{ mt: 5 }} item xs={12} display="flex" alignItems="center" justifyContent="center">
                        <TextField
                            id="standard-multiline-static"
                            label="Comment"
                            multiline
                            rows={4}
                            defaultValue="Your Feedback"
                            variant="standard"
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 5 }} display="flex" alignItems="center" justifyContent="center">
                        <ColorButton sx={{ display: { xs: "none", md: "inline" } }} size="large" variant="contained">
                            submit
                        </ColorButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
