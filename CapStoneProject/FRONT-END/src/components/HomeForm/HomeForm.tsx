import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { addOrderFormAsync } from "../../redux-toolkit/OrderFormSlice";
import { cars1, getCarAsync } from "../../redux-toolkit/CarSlice";
import "./HomeForm.css";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { newObj } from "../../types/AllTypes";

const HomeForm = () => {
    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);

    useEffect(() => {
        dispatch(getCarAsync());
    }, []);

    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [carType, setCarType] = useState<string | undefined | null>();
    const [fromDate, setFromDate] = useState<string | undefined>("");
    const [toDate, setToDate] = useState<string | undefined>("");

    const handleChange = (event: SelectChangeEvent) => {
        setCarType(event.target.value as string);
    };

    const onSubmit = (e: any) => {
        newObj.brand = carType;
        newObj.fromDate = fromDate;
        newObj.toDate = toDate;

        dispatch(addOrderFormAsync(newObj));
        setOpenAlert(true);
        e.preventDefault();
        e.target.reset();
        dispatch(getCarAsync());
    };

    const alertFunction = () => {
        setOpenAlert(false);
        setCarType("");
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "#FFB74E",
                    justifyContent: "space-around",
                }}
            >
                <Box sx={{ backgroundColor: "#FFC776", my: "6rem", p: "0.5rem" }}>
                    <Box onSubmit={(e) => onSubmit(e)} component="form" noValidate autoComplete="off" sx={{ backgroundColor: "#FFFFFF" }}>
                        <Box sx={{ mx: "auto", py: "3rem", width: "80%" }}>
                            {/* ALERT OPTIONA */}
                            <Box sx={{ width: "100%" }}>
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

                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: "2rem",
                                        fontFamily: "'Roboto', sans-serif;",
                                        fontWeight: "bold",
                                        fontSize: { xs: "1.5rem", lg: "2rem" },
                                    }}
                                >
                                    Renting a car has never been easier
                                </Typography>
                            </Box>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Car-Model</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange} label="Car-Type">
                                        {allCars &&
                                            allCars.map((item) => (
                                                <MenuItem key={item._id} value={item.brand}>
                                                    {item.brand}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                                <Grid container>
                                    {allCars.map((item) =>
                                        item.brand === carType ? (
                                            <>
                                                <Grid item xs={12} sm={8}>
                                                    <img src={item.img[0]} className="imgD" alt="car brand" />
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <ul>
                                                        <Typography variant="subtitle1">SPECS</Typography>

                                                        <li>
                                                            <Typography variant="overline">
                                                                CarType:<span style={{ color: "orange", fontWeight: "bolder" }}>{item.carType}</span>
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="overline">
                                                                GPS:{" "}
                                                                {item.gps === true ? (
                                                                    <span style={{ color: "orange", fontWeight: "bolder" }}>Y</span>
                                                                ) : (
                                                                    <span style={{ color: "orange", fontWeight: "bolder" }}>N</span>
                                                                )}{" "}
                                                                - 4x4:
                                                                {item._4x4 === true ? (
                                                                    <span style={{ color: "orange", fontWeight: "bolder" }}>Y</span>
                                                                ) : (
                                                                    <span style={{ color: "orange", fontWeight: "bolder" }}>N</span>
                                                                )}{" "}
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="overline">
                                                                Brand:<span style={{ color: "orange", fontWeight: "bolder" }}>{item.brand}</span>
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="overline">
                                                                Transmission:<span style={{ color: "orange", fontWeight: "bolder" }}>{item.transmission}</span>
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="overline">
                                                                Model:<span style={{ color: "orange", fontWeight: "bolder" }}>{item.carModel}</span>
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="overline">
                                                                Engine:
                                                                <span style={{ color: "orange", fontWeight: "bolder" }}>{item.engCapacity}L</span>
                                                            </Typography>
                                                        </li>
                                                    </ul>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="h3" align="center">
                                                        {item.price.toFixed(2)} $/d
                                                    </Typography>
                                                </Grid>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", mt: "1rem" }}>
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    sx={{ width: "50%" }}
                                    InputLabelProps={{ shrink: true }}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />

                                <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    sx={{ width: "50%", ml: "0.5rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </Box>

                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                sx={{
                                    mt: "2rem",
                                    width: "100%",
                                    backgroundColor: orange[500],
                                    "&:hover": {
                                        backgroundColor: orange[700],
                                    },
                                }}
                            >
                                Reserve Now
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: 325,
                        my: "auto",
                        display: { xs: "none", lg: "flex" },
                    }}
                    alt="Black Tesla"
                    src="images/tesla_black.png"
                />
            </Box>
        </>
    );
};

export default HomeForm;
