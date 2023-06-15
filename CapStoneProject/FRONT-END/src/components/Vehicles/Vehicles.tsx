import EachVehicle from "./EachVehicle";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { cars1, flag1, getCarAsync } from "../../redux-toolkit/CarSlice";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Box, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { TCar } from "../../types/AllTypes";

const Vehicles = () => {
    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);
    const flag = useAppSelector(flag1);
    let cTYPE: string[] = [];

    const [priceAmount, setPriceAmount] = useState<string | undefined | null>(null);
    const [type, setType] = useState<string | undefined | null>(null);
    const [carsF, setCarsF] = useState<TCar[]>([]);
    const [sWord, setSword] = useState<string | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setPriceAmount(event.target.value as string);
    };

    const handleChange2 = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    allCars.filter((element) => {
        const isDuplicate = cTYPE.includes(element.carType);
        if (!isDuplicate) {
            cTYPE.push(element.carType);
        }
    });

    useEffect(() => {
        dispatch(getCarAsync());
    }, []);

    useEffect(() => {
        // if(priceAmount !== null && type !==null){
        //     priceAmount==='low'? setCarsF(allCars.slice().sort((a,b)=>a.price - b.price)):setCarsF(allCars.slice().sort((a,b)=>b.price - a.price));
        //     setCarsF(allCars.filter((item)=>item.carType === type));
        // } else

        if (priceAmount !== null && type !== null) {
            // setCarsF(carsF.filter((item)=>item.carType === type));
            const a = allCars.filter((item) => item.carType === type);
            priceAmount === "low" ? setCarsF(a?.slice().sort((a, b) => a.price - b.price)) : setCarsF(a?.slice().sort((a, b) => b.price - a.price));
        } else if (priceAmount !== null) {
            priceAmount === "low"
                ? setCarsF(allCars.slice().sort((a, b) => a.price - b.price))
                : setCarsF(allCars.slice().sort((a, b) => b.price - a.price));
        } else if (type !== null) {
            setCarsF(allCars.filter((item) => item.carType === type));
        } else if (sWord !== null) {
            setCarsF(allCars.filter((item) => item.brand.toLocaleLowerCase().includes(sWord.toLowerCase())));
        } else if (flag === true) {
            setCarsF(allCars);
        }
    }, [priceAmount, flag, type, sWord]);

    return (
        <>
            <Grid container sx={{ mt: 5 }}>
                <Grid item xs={12} sm={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <FormControl sx={{ width: "20rem" }}>
                        <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange} label="Sort By Price">
                            <MenuItem value="low">Ascending</MenuItem>
                            <MenuItem value="high">Descending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <FormControl sx={{ width: "20rem" }}>
                        <InputLabel id="demo-simple-select-label">Sort By Type</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange2} label="Sort By Price">
                            {cTYPE &&
                                cTYPE.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} display="flex" alignItems="center" justifyContent="center">
                    <TextField id="outlined-basic" label="Search Brand" variant="outlined" onChange={(e) => setSword(e.target.value)} />
                </Grid>
            </Grid>

            {carsF && carsF.map((item) => <EachVehicle {...item} />)}
        </>
    );
};

export default Vehicles;
