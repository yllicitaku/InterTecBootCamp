import mongoose, { Document, model, Schema } from "mongoose";

export type TUser = {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    token?: string;
};

export interface IUser extends Document {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    token?: string;
}

const userSchema: Schema = new Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    surname: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    token: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
});

const User = model<IUser>("User", userSchema);
export default User;
