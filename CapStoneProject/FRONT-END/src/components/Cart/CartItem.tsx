import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/material";
import { ColorButton } from "../../utils/Utilities";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { deletOrderAsync } from "../../redux-toolkit/OrderFormSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { OrderFormType } from "../../types/AllTypes";

const CartItem = (props: OrderFormType) => {
    const dispatch = useAppDispatch();

    const deletOrder = (_id: string | undefined) => {
        confirmAlert({
            title: "Confirm to remove Product",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(deletOrderAsync(_id)),
                },
                {
                    label: "No",
                },
            ],
        });
    };

    return (
        <Card sx={{ maxWidth: { xs: 400, sm: 500, md: 600, lg: 700 }, display: "flex" }}>
            <Box sx={{ width: "60%" }}>
                <CardMedia component="img" height="100%" image={`${props.img}`} alt="car" />
            </Box>
            <Box sx={{ width: "40%" }}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: orange[700], fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}
                    >
                        {props.carModel}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: "'Roboto', sans-serif;", fontWeight: "bold" }}>
                        {props.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Type: </span>
                        {props.carType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Engine Capacity: </span>
                        {props.engCapacity} litres
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">GPS unit: </span>
                        {props.gps === true ? "YES" : "NO"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">AWD: </span>
                        {props._4x4 === true ? "YES" : "NO"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Price:</span>
                        {props.price}$/d
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Period:</span>
                        {`${props.fromDate} - ${props.toDate}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                        <span id="section">Days:</span>
                        {props.duration} Days
                    </Typography>
                </CardContent>
                <CardActions>
                    <ColorButton sx={{ ml: "auto" }} size="small" variant="contained" onClick={() => deletOrder(props._id)}>
                        remove
                    </ColorButton>
                </CardActions>
            </Box>
        </Card>
    );
};

export default CartItem;
