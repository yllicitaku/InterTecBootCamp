import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";

const tiers = [
    {
        title: "DAILY",
        price: 59.99,
        description: ["Micro", "Sedan", "Universal", "Manual + GPS"],
        buttonText: "RENT",
        buttonVariant: "outlined",
    },
    {
        title: "WEEKLY",
        subheader: "Most popular",
        price: 399.99,
        description: ["Daily offer included", "Coupe", "Cabriolet", "4X4"],
        buttonText: "Rent Now",
        buttonVariant: "contained",
    },
    {
        title: "QUARTERLY",
        price: 1499.99,
        description: ["Weekly offer included", "Van", "Sport Car", "Targa"],
        buttonText: "Rent",
        buttonVariant: "outlined",
    },
];

function PricingContent() {

    const navigate = useNavigate();

    const getOffer=(price:number)=>{
         if(price===399.99){
            price = price/7;
         }else if(price === 1499.99)
          price=price/30;
         
        navigate('/pricingList',{state:{priceT:price}});
    }
    
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}></AppBar>
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontFamily: "Roboto, sans-serif;", fontWeight: 700, letterSpacing: ".1rem" }}
                >
                    PRICING
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}>
                    Get the best offer ever!
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center", fontFamily: "'Space Grotesk', sans-serif;" }}
                                    action={tier.title === "Pro" ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: "center",
                                        fontFamily: "'Space Grotesk', sans-serif;",
                                        color: orange[700],
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "baseline",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="text.primary"
                                            sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}
                                        >
                                            €{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}>
                                            {tier.price === 59.99 ? "/d" : tier.price === 399.99 ? "/w" : tier.price === 1499.99 ? "/m" : ""}
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                                sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    onClick={()=>getOffer(tier.price)}
                                        fullWidth
                                        sx={{
                                            backgroundColor: orange[500],
                                            "&:hover": {
                                                backgroundColor: orange[700],
                                            },
                                        }}
                                        variant="contained"
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default function Pricing() {
    return <PricingContent />;
}
