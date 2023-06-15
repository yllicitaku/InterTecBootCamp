import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import { ColorButton } from "../../utils/Utilities";
import { TCar } from "../../types/AllTypes";

const CarCard = (props: TCar) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia component="img" height="180" image={props.img[0]} alt="car" />
            <CardContent sx={{ p: "1rem" }}>
                <Typography gutterBottom variant="caption" component="div" sx={{ color: orange[700] }}>
                    {props.carModel}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}>
                    {props.brand}
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, laudantium doloribus id ratione nisi dicta repellendus fuga
                    magnam!
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>{`${props.price.toFixed(2)} $/d`}</Typography>
            </CardContent>
            <CardActions>
                <ColorButton size="small" variant="contained">
                    RENT NOW
                </ColorButton>
            </CardActions>
        </Card>
    );
};

export default CarCard;
