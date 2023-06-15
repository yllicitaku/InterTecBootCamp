import { Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";
import "./About.css";

export default function Questions() {
    return (
        <Grid container sx={{ mt: 5, ml: "1rem" }}>
            <Grid item xs={12}>
                <Typography className="gColor" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500], fontSize:{xs:'1rem', sm:'1.5rem',}  }}>
                    What we're about
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <Typography className="gColor" variant="overline" sx={{fontSize:{xs:'0.5rem', sm:'0.8rem', md:'0.8rem'}}}>
                    Renting a car brings you freedom, and we’ll help you find the right car for you at a great price. But there’s much more to us than
                    that. We're here to make renting a car a lot less hassle
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 5 }}>
                <Typography className="gColor"  sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500],fontSize:{xs:'1rem', sm:'1.5rem'}  }}>
                    How We Work
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <Typography className="gColor" variant="overline"  sx={{fontSize:{xs:'0.5rem', sm:'0.8rem',md:'0.8rem'}}}>
                    We are a broker, so we arrange the car rental on your behalf. As we cooperate with so many rental companies, we're in the perfect
                    position to offer you a wide range of great deals, all around the world. But we’re way more than a price comparison site, because
                    we stay with you every step of the way.
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 5 }}>
                <Typography className="gColor"   sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500],fontSize:{xs:'1rem', sm:'1.5rem'}  }}>
                    Why us
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <Typography className="gColor" variant="overline"  sx={{fontSize:{xs:'0.5rem', sm:'0.8rem',md:'0.8rem'}}}>
                    We use all our experience – and the experiences of millions of our customers – to bring you the car you need and the quality of
                    service you want. Always at the best price. But don’t take our word for it. Take a look at what real people think about
                    Rentalcars.com.
                </Typography>
            </Grid>
        </Grid>
    );
}
