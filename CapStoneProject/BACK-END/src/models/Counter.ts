import mongoose, { Document, model, Schema } from "mongoose";

export type TCounter = {
    _id: string;
    seq: number;
};
export interface ICounter extends Document {
    _id: string;
    seq: number;
}
const counterSchema: Schema = new Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    seq: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
});

const Counter = model<ICounter>("Counter", counterSchema);

export async function getNextSequence(name: string) {
    let ret: ICounter = (await Counter.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } }, { new: true })) as ICounter;
    return ret.seq;
}
export default Counter;
