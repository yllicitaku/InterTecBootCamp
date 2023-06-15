import mongoose, { Document, model, Schema } from "mongoose";

export type TGUser = {
    googleId: String;
    email: String;
};

export interface IGUser extends Document {
    googleId: String;
    email: String;
}

const gUserSchema: Schema = new Schema({
    googleId: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
});

const GUser = model<IGUser>("GUser", gUserSchema);
export default GUser;
