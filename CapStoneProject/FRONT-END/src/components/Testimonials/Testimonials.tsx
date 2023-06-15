import React from "react";
import { Container, Box, Grid, Typography, makeStyles } from "@mui/material";
import { orange } from "@mui/material/colors";
import "./Testimonials.css";

const Testimonials = (props: any) => {
    // const classes = useStyles();

    const content = {
        logo1: "/images/mercedes_logo1.png",
        logo2: "/images/audi_logo.jpeg",
        logo3: "/images/bmw_logo.jpeg",
        logo4: "/images/rangeRover_logo.png",
        logo5: "/images/porsche_logo.jpeg",
        logo6: "/images/suzuki_logo.png",
        logo7: "/images/vw_logo.jpeg",
        logo8: "/images/toyota_logo.png",
        ...props.content,
    };

    return (
        <>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontFamily: "Roboto, sans-serif;", fontWeight: 700, letterSpacing: ".1rem" }}
                >
                    <span id="section">TRUSTED</span> BRANDS
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}>
                    We only work with the best!
                </Typography>
            </Container>
            <section>
                <Container maxWidth="lg">
                    <Box py={3}>
                        {/* <Box mb={2}>
                            <Typography variant="overline" component="h3" color="textSecondary" align="center">
                                {content["header"]}
                            </Typography>
                        </Box> */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo1"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo2"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo3"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo4"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo5"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo6"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo7"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    sx={{ backgroundColor: orange[400], borderRadius: "0.5rem", border: "3px solid orange" }}
                                >
                                    <img src={content["logo8"]} alt="" id="brands" height="48" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default Testimonials;
