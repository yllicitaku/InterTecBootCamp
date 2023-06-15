import { useEffect, useState } from "react";
import { Alert,   Collapse, Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { newObj, TCar } from "../../types/AllTypes";
import "./EachVehicle.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import OpenImage from "./OpenImage";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { cars1, getCarAsync } from "../../redux-toolkit/CarSlice";
import { ColorButton } from "../../utils/Utilities";
import { useNavigate } from "react-router";
import { addOrderFormAsync } from "../../redux-toolkit/OrderFormSlice";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function EachVehicle(props: TCar) {
    const [openImages, setOpenImages] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [idG, setIdG] = useState<string>("");
    const [finalImage, setFinalImage] = useState<string>("");

    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);

    useEffect(() => {
        dispatch(getCarAsync());
    }, []);

    const clickImage = (pr: string) => {
        setFinalImage(pr);
        setOpen(true);
    };

    const myF = (id: string) => {
        setOpenImages(!openImages);
        setIdG(id);
    };
    const navigate = useNavigate();

    //post procedure from vehicle page
    const [fromDate, setFromDate] = useState<string | undefined>("");
    const [toDate, setToDate] = useState<string | undefined>("");
    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const addtoCart = ()=>{
        newObj.brand = props.brand;
        newObj.fromDate = fromDate;
        newObj.toDate = toDate;
        dispatch(addOrderFormAsync(newObj));
        setOpenAlert(true);
    }

    const alertFunction = () => {
        setOpenAlert(false);
    };
  
    return (
        <>
            <Card sx={{ display: "flex", width: {xs:'100vw', sm:'100vw', md:'50vw'}, margin: "auto", mt: 5 }}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography component="div" variant="h5">
                                    <Typography variant="overline">Type:</Typography>
                                    {props.carType}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">Brand:</Typography>
                                    {props.brand}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">Price:</Typography>
                                    <span style={{color:'red'}}>{props.price.toFixed(2)}</span>$/d
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">GPS:</Typography>
                                    {props.gps === true ? "YES" : "NO"}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">4x4:</Typography>
                                    {props._4x4 === true ? "YES" : "NO"}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">Transmission:</Typography>
                                    {props.transmission}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <Typography variant="overline">EngineCapacity:</Typography>
                                    {props.engCapacity}L
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <button data-text="Awesome" className="button" onClick={() => myF(props._id)}>
                                        <span className="actual-text">&nbsp;Images&nbsp;</span>
                                        <span className="hover-text" aria-hidden="true">
                                            &nbsp;Images&nbsp;
                                        </span>
                                    </button>
                                </Typography>
                                <Grid container sx={{mt:3}}>
                                    <Grid item xs={6}>
                                    <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    sx={{ width: "100%" }}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    sx={{ width: "100%", ml: "0.5rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                                    </Grid>
                                </Grid>
                                <Typography   component="div" sx={{mt:4}}>
                                <ColorButton size="small" variant="contained" onClick={() => addtoCart()}>
                    Add to Cart
                </ColorButton>
                                </Typography>
                            </CardContent>
                            <Collapse in={openAlert}>
                                    <Alert
                                        action={
                                            <IconButton aria-label="close" color="inherit" size="small" onClick={alertFunction}>
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                        sx={{ mb: 2 }}
                                    >
                                        Order has been added, pleace check your Cart!
                                    </Alert>
                                </Collapse>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardMedia component="img" image={props.img[0]} />
                    </Grid>
                </Grid>
            </Card>
            <Card sx={{ display: "flex", width: "50vw", margin: "auto", mt: 5 }} hidden={!openImages}>
                <ImageList sx={{ width: "100%vw", height: {xs:400, sm:600,md:700} }} variant="woven" cols={3} gap={2}>
                    {allCars.map((item) => (
                        <>
                            {item._id === idG ? (
                                <>
                                    {item.img.map((tg) => (
                                        <ImageListItem key={tg}>
                                            <img
                                                src={`${tg}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${tg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                loading="lazy"
                                                onClick={() => clickImage(tg)}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </ImageListItem>
                                    ))}
                                </>
                            ) : (
                                ""
                            )}
                        </>
                    ))}
                </ImageList>
            </Card>
            <div>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
                    <OpenImage ig={finalImage} />
                </Modal>
            </div>
        </>
    );
}
