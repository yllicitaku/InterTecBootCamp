// import dotenv from "dotenv";
// import path from "path";
// import fs from "fs";
// import https from "https";
import cors from "cors";
import express from "express";
import user from "./routes/usersRoute";
import userAuth from "./routes/userTokenAuth";
import googleAuth from "./routes/googleAuth";
import bodyParser from "body-parser";
import Counter from "./models/Counter";
import OrderFormRoute from "./routes/OrderFormRoute";
import sendPdf from "./routes/Invoices";
import CarRoute from "./routes/CarRoute";
import GUserRoute from "./routes/GUserRoute";
import connectDB from "./config/database";
import auth from "./middleware/auth";
import CheckoutRoute from "./routes/CheckoutRoute";
import * as dotenv from "dotenv";

dotenv.config();

const passport = require("passport");
const app = express();
const port = 3300;

connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());
// require("./routes/authRoutes")(app);

// const path2sd = path.normalize(path.join(__dirname,'../serverdata/server'));

// https.createServer({
//     key:fs.readFileSync(path2sd+'.key'),
//     cert:fs.readFileSync(path2sd+'.cert')
// }, app).listen(port,async()=>{
//     console.log('Server listening on port'+port);
//     conn = await mongoose.connect(process.env.MONGODB_URI!);
//     if(conn.ConnectionStates.connected){

//         // const nseq =  await createCounter('todoid');
//         const cEntry = await Counter.exists({_id:'orderFormId'});
//          if(cEntry === null){
//             const nseq =  await createCounter('orderFormId');
//          }
//         console.log('Connect to MongoDB');
//     }
// });

app.listen(port, async () => {
    console.log("Server listening on port: " + port);
    const oEntry = await Counter.exists({ _id: "orderFormId" });
    const cEntry = await Counter.exists({ _id: "carId" });
    const uEntry = await Counter.exists({ _id: "userId" });
    const fEntry = await Counter.exists({ _id: "FCheckoutId" });
    if (oEntry === null) {
        await createCounter("orderFormId");
    }
    if (cEntry === null) {
        await createCounter("carId");
    }
    if (uEntry === null) {
        await createCounter("userId");
    }
    if (fEntry === null) {
        await createCounter("FCheckoutId");
    }
});

app.use("/orderform", OrderFormRoute);
app.use("/cars", CarRoute);
app.use("/guser", GUserRoute);
app.use("/fcheckoutData", CheckoutRoute);
app.use("/api/user", user);
app.use("/api/login", userAuth);

app.use("/auth", googleAuth);
app.use("/invoices", sendPdf);
// require("./routes/googleAuth")(app);

app.get("/dashboard", auth, (req, res) => {
    res.status(201).send("successfull");
});

//Funksioni CounterID
async function createCounter(name: string) {
    return await Counter.insertMany([{ _id: name, seq: 0 }]);
}

// openssl req -nodes -new -x509 -keyout server.key -out server.cert
