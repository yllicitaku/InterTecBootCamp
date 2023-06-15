"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dotenv from "dotenv";
// import path from "path";
// import fs from "fs";
// import https from "https";
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const userTokenAuth_1 = __importDefault(require("./routes/userTokenAuth"));
const body_parser_1 = __importDefault(require("body-parser"));
const Counter_1 = __importDefault(require("./models/Counter"));
const OrderFormRoute_1 = __importDefault(require("./routes/OrderFormRoute"));
const CarRoute_1 = __importDefault(require("./routes/CarRoute"));
const database_1 = __importDefault(require("./config/database"));
const auth_1 = __importDefault(require("./middleware/auth"));
const app = (0, express_1.default)();
const port = 3300;
(0, database_1.default)();
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "*",
}));
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
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server listening on port: " + port);
    const oEntry = yield Counter_1.default.exists({ _id: "orderFormId" });
    const cEntry = yield Counter_1.default.exists({ _id: "carId" });
    const uEntry = yield Counter_1.default.exists({ _id: "userId" });
    if (oEntry === null) {
        yield createCounter("orderFormId");
    }
    if (cEntry === null) {
        yield createCounter("carId");
    }
    if (uEntry === null) {
        yield createCounter("userId");
    }
}));
app.use("/orderform", OrderFormRoute_1.default);
app.use("/cars", CarRoute_1.default);
app.use("/api/user", usersRoute_1.default);
app.use("/api/login", userTokenAuth_1.default);
app.get("/dashboard", auth_1.default, (req, res) => {
    res.status(201).send("your account");
});
//Funksioni CounterID
function createCounter(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Counter_1.default.insertMany([{ _id: name, seq: 0 }]);
    });
}
