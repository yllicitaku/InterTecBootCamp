import { connect } from "mongoose";
import config from "config";

const connectDB = async () => {
    try {
        const mongoURI: string = config.get("MONGODB_URI");
        const conn = await connect(mongoURI);
        if (conn.ConnectionStates.connected) {
            console.log("Connected to MongoDB ✅");
        }
    } catch (error) {
        console.log(`This error occured while trying to connect the MongoDB => ${error}`);
        process.exit(1);
    }
};

export default connectDB;
