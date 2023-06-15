import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCar } from "../types/AllTypes";
import { server_ip } from "../utils/Utilities";
import { RootState } from "./store";

export interface Icar {
    cars: TCar[];
    flag: boolean;
}

const InitialState: Icar = {
    cars: [] as TCar[],
    flag: false,
};

//Menaxhimi i state me Databaze(MongoDB)

//GET METHOD OF CARS
export const getCarAsync = createAsyncThunk(
    "cars/getCarAsync",

    async () => {
        const resp = await axios({
            method: "GET",
            url: `${server_ip}/cars`,
            // withCredentials: false,
        });
        if (resp.status === 201) {
            return resp.data;
        }
    }
);

export const carSlice = createSlice({
    name: "cars",
    initialState: InitialState,

    //Menaxhimi i state lokalisht
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCarAsync.fulfilled, (state, action) => {
            state.cars = action.payload;
            if (state.cars.length > 0) {
                state.flag = true;
            }
        });
    },
});

export default carSlice.reducer;

export const cars1 = (state: RootState) => state.cars.cars;
export const flag1 = (state: RootState) => state.cars.flag;
// export const {addOrder} = carSlice.actions;
