import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { anon_user, SignInType, UserType } from "../types/AllTypes";
import { RootState } from "./store";
import HttpStatusCodes from "http-status-codes";
import { server_ip } from "../utils/Utilities";

export interface IUser {
    user: UserType;
}

const InitialState: IUser = {
    user: anon_user,
};
export const signUp = createAsyncThunk("user/signUp", async (payload: UserType) => {
    //send form input
    const resp = await axios({
        method: "POST",
        url: `${server_ip}/api/user`,
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    });
    if (resp.status === HttpStatusCodes.CREATED) {
        //receives form input
        return resp.data;
    }
});

export const signIn = createAsyncThunk("user/signIn", async (payload: SignInType) => {
    //send email and password
    const resp = await axios({
        method: "POST",
        url: `${server_ip}/api/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: payload,
    });
    if (resp.status === HttpStatusCodes.ACCEPTED) {
        return resp.data;
    }
});

export const dashboard = createAsyncThunk("user/dashboard", async (payload: any) => {
    console.log("dashboard payload:", payload);
    const resp = await axios({
        method: "GET",
        url: `${server_ip}/api/dashboard`,
        headers: {
            "x-auth-token": payload.token,
        },
    });
    if (resp.status === 201) {
        console.log("dash pay", resp.data);
    }
});

export const google_user = createAsyncThunk("user/google_user", async () => {
    const resp = await axios({
        method: "GET",
        url: `${server_ip}/gusers`,
        // withCredentials: false,
    });
    if (resp.status === 201) {
        return resp.data;
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState: InitialState,

    //Menaxhimi i state lokalisht
    reducers: {
        addUser: (state, action) => {
            // state.user.push(action.payload);
        },
    },

    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            console.log(action.payload.user);
            state.user = action.payload.user;
        });
        // builder.addCase(deletOrderAsync.fulfilled, (state, action) => {
        //     state.orderform = state.orderform.filter((item) => item._id !== action.payload);
        // });
    },
});

export default userSlice.reducer;

export const user = (state: RootState) => state.users.user;
export const { addUser } = userSlice.actions;
