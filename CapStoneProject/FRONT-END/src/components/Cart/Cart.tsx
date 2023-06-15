import { Box, Divider, Typography } from "@mui/material";
// import CartItem from "./CartItem";
import { orange } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ColorButton } from "../../utils/Utilities";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { orderform1, getOrdersAsync } from "../../redux-toolkit/OrderFormSlice";
import { useEffect } from "react";
import CartItem from "./CartItem";
// import { cars1, getCarAsync } from "../../redux-toolkit/CarSlice";
// import jsPDF from "jspdf";
// import QRCode from "qrcode.react";
import { useNavigate } from "react-router";

const Cart = () => {
    const dispatch = useAppDispatch();
    const totalOrders = useAppSelector(orderform1);

    var total: number = 0;
    // var space: number = 30;

    totalOrders.forEach((item) => {
        total += item.price! * item.duration!;
    });

    useEffect(() => {
        dispatch(getOrdersAsync());
    }, [dispatch]);

    // const generatePDF = () => {
    //     var doc = new jsPDF("portrait", "px", "a4", false);
    //     doc.setFont("Hlvertica", "bold");
    //     doc.text("INVOICE", 200, space * 2);
    //     doc.text(`Full Name: Valmir Mujku`, space, space * 3);
    //     doc.text(`Total Cars: ${totalOrders.length}`, space, space * 4);
    //     doc.text(`Total: ${total} $`, space, space * 5);
    //     totalOrders.forEach((item) => {
    //         doc.text(`Car Specifications`, space, space * 8);
    //         doc.text(`Brand: ${item.brand}`, space, space * 9);
    //         doc.text(`Car Type: ${item.carType}`, space, space * 10);
    //         doc.text(`GPS: ${item.gps}`, space, space * 11);
    //         doc.text(`4X4: ${item._4x4}`, space, space * 12);
    //         doc.text(`Engine Capacity: ${item.engCapacity}`, space, space * 13);
    //         doc.text(`Price: ${item.price}/d`, space, space * 14);
    //     });

    //     doc.save();
    // };

    const navigate = useNavigate();

    const sendToCheckout=(price:number)=>{
    
        navigate('/checkout',{state:{a1:price,a2:totalOrders.length}});
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ShoppingCartIcon fontSize="large" sx={{ my: "auto", color: orange[500], mr: "0.5rem" }} />
                <Typography align="center" variant="h2" sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold", color: orange[500], my: "2rem" }}>
                    My Cart
                </Typography>
            </Box>
            <Box sx={{ mx: "auto", display: "flex", flexDirection: "column" }}>
                {totalOrders &&
                    totalOrders.map((car) => (
                        <Box sx={{ mx: "auto", pb: "2rem" }}>
                            <CartItem {...car} />
                        </Box>
                    ))}
            </Box>
            <Divider sx={{ mb: "1rem" }} />
            <Box
                sx={{
                    mx: "auto",
                    maxWidth: { xs: 400, sm: 500, md: 600, lg: 700 },
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }} variant="h6">
                        Total: <span id="section">{total.toFixed(2)}$</span>
                    </Typography>
                </Box>
                <ColorButton size="small" variant="contained" onClick={() =>sendToCheckout(total) }>
                    proceed to checkout
                </ColorButton>
            </Box>
        </>
    );
};

export default Cart;
