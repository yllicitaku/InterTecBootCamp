import mongoose, { Document, model, mongo, Schema } from "mongoose";

const FinalCheckoutSchema: Schema = new Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    cars: [
        {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    ],
    totalAmount:{
        type: mongoose.Schema.Types.Number,
            required: true,
    }


});

export type TFCheckout2 = {
    _id: string | undefined |number,
    cars:string[] |undefined,
    totalAmount:number| undefined
};

export const newObj:TFCheckout2 = {
    _id:undefined,
    cars:[],
    totalAmount:0
}

FinalCheckoutSchema.set("timestamps", true);

export type TFCheckout = {
    _id: string;
    cars: string[];
    totalAmount: number;
};

export interface ICheckout extends Document {
    _id: string;
    cars: string[];
    totalAmount: number;
}

export const CheckoutForm = model<ICheckout>("CheckoutOrder", FinalCheckoutSchema);