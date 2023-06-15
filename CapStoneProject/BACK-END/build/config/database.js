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
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("config"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = config_1.default.get("MONGODB_URI");
        const conn = yield (0, mongoose_1.connect)(mongoURI);
        if (conn.ConnectionStates.connected) {
            console.log("Connected to MongoDB ✅");
        }
    }
    catch (error) {
        console.log(`This error occured while trying to connect the MongoDB => ${error}`);
        process.exit(1);
    }
});
exports.default = connectDB;
