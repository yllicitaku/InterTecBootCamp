import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OrderFormType } from "../types/AllTypes";
import { RootState } from "./store";
import { server_ip } from "../utils/Utilities";

export interface IOrderForm {
    orderform: OrderFormType[];
    // count:number
}

const InitialState: IOrderForm = {
    orderform: [] as OrderFormType[],
    // count:0
};

//Menaxhimi i state me Databaze(MongoDB)

//GET METHOD OF ORDER
export const getOrdersAsync = createAsyncThunk("orderform/getOrdersAsync", async () => {
    const resp = await axios({
        method: "GET",
        url: `${server_ip}/orderform`,
    });
    if (resp.status === 201) {
        return resp.data;
    }
});

//POST METHOD OF ORDER
export const addOrderFormAsync = createAsyncThunk("orderform/addOrderFormAsycn", async (payload: OrderFormType) => {
    const resp = await axios({
        method: "POST",
        url: `${server_ip}/orderform`,
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    });
    if (resp.status === 201) {
        return resp.data;
    }
});

export const CheckoutFormAsync = createAsyncThunk("fcheckoutData/CheckoutFormAsync", async (payload: OrderFormType[]) => {
 
    const resp = await axios({
        method: "POST",
        url: "http://localhost:3300/fcheckoutData",
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    });
    if (resp.status === 201) {
        return resp.data;
    }
});

export const deletOrderAsync = createAsyncThunk("orderform/deletOrderAsync", async (payload: string | undefined) => {
    const resp = await axios({
        method: "DELETE",
        url: `${server_ip}/orderform/:${payload}`,
        data: {
            _id: payload,
        },
    });

    if (resp.status === 201) {
        return payload;
    }
});

export const formSlice = createSlice({
    name: "orderform",
    initialState: InitialState,

    //Menaxhimi i state lokalisht
    reducers: {
        addOrder: (state, action) => {
            state.orderform.push(action.payload);
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getOrdersAsync.fulfilled, (state, action) => {
            state.orderform = action.payload;
        });
        builder.addCase(addOrderFormAsync.fulfilled, (state, action) => {
            //  state.count+=1;
        });
        builder.addCase(deletOrderAsync.fulfilled, (state, action) => {
            state.orderform = state.orderform.filter((item) => item._id !== action.payload);
        });
        // builder.addCase(modifyFormAsync.fulfilled, (state, action) => {
        //     // const idx = state.forms.find((one)=>one.id === action.payload.id) || 0;
        //     // return {
        //     //     ...state, tasks: state.forms.splice(idx as number, 1, action.payload)
        //     // }
        // });
    },
});

export default formSlice.reducer;

export const orderform1 = (state: RootState) => state.orderform.orderform;
export const { addOrder } = formSlice.actions;

