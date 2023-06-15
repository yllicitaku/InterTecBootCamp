import React from "react";
import { Container, Grid, Box, Typography, Avatar } from "@mui/material";
import "./Team.css";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginBottom: theme.spacing(2)
//   },
// }));

const Team = (props: any) => {
    const content = {
        description: "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
        "01_image": "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
        "01_name": "Danny Bailey",
        "01_job": "CEO & Founder",

        "02_image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=256&ah=256&q=80",
        "02_name": "Alice Bradley",
        "02_job": "Head of Operations",

        "03_image": "https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
        "03_name": "Ian Brown",
        "03_job": "Head of Development",

        "04_image": "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=256&ah=256&q=80",
        "04_name": "Daisy Carter",
        "04_job": "Sales Director",

        "05_image":
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "05_name": "Danny Bailey",
        "05_job": "CEO & Founder",

        "06_image":
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "06_name": "Alice Bradley",
        "06_job": "Head of Operations",

        "07_image":
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "07_name": "Ian Brown",
        "07_job": "Head of Development",

        "08_image":
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "08_name": "Daisy Carter",
        "08_job": "Sales Director",
        ...props.content,
    };

    return (
        <section>
            <Container maxWidth="lg">
                <Box pt={8} pb={12} textAlign="center">
                    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            sx={{ fontFamily: "Roboto, sans-serif;", fontWeight: 700, letterSpacing: ".1rem" }}
                        >
                            <span id="section">MEET OUR</span> AMAZING TEAM
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            component="p"
                            sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}
                        >
                            The people behind our amazing company!
                        </Typography>
                    </Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["01_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["01_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["01_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["02_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["02_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["02_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["03_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["03_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["03_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["04_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["04_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["04_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["05_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["05_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["05_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["06_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["06_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["06_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["07_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["07_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["07_job"]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Avatar alt="" src={content["08_image"]} id="avatar" sx={{ width: "5rem", height: "5rem" }} />
                            <Typography variant="h6" component="h6" gutterBottom={true}>
                                {content["08_name"]}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="span">
                                {content["08_job"]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Team;
