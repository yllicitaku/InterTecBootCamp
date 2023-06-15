import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import formsReducer from "./OrderFormSlice";
import allcars from "./CarSlice";
import user from "./UserSlice";

export const store = configureStore({
    reducer: {
        orderform: formsReducer,
        cars: allcars,
        users: user,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
