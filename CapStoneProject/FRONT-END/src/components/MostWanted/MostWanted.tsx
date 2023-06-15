import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import CarCard from "./CarCard";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { cars1, getCarAsync } from "../../redux-toolkit/CarSlice";
import { useEffect, useState } from "react";
import { pbkdf2 } from "crypto";

const MostWanted = () => {
    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);
    const [count, setCount] = useState<number>(0);

    const wantedCars = new Array(3);

    useEffect(() => {
        dispatch(getCarAsync());
        // if(allCars.length>0){
        //     let sortedProducts = allCars.sort(
        //         (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
        //     console.log(sortedProducts);
        // }
    }, []);

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
                    <span id="section">MOST WANTED</span> CARS THIS MONTH
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ fontFamily: "'Space Grotesk', sans-serif;" }}>
                    Get them while theyre available!
                </Typography>
            </Container>
            <Container maxWidth="lg" component="main" sx={{ my: "2rem", mx: "auto" }}>
                <Box sx={{ px: { xs: "3rem", md: "0" } }}>
                    <Grid container spacing={3} alignItems="flex-end">
                        {allCars.map((car, index) =>
                            index < 3 ? (
                                <Grid item key={car._id} xs={12} sm={6} md={4}>
                                    <CarCard {...car} />
                                </Grid>
                            ) : (
                                ""
                            )
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default MostWanted;
