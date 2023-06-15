"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderForm = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const orderFormSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    brand: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    fromDate: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    toDate: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    carType: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    carModel: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    gps: {
        type: mongoose_1.default.Schema.Types.Boolean,
        required: true,
    },
    _4x4: {
        type: mongoose_1.default.Schema.Types.Boolean,
        required: true,
    },
    transmission: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    engCapacity: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
        default: 1.9,
    },
    img: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
    },
    duration: {
        type: mongoose_1.default.Schema.Types.Number,
        required: true,
    },
});
orderFormSchema.set("timestamps", true);
exports.OrderForm = (0, mongoose_1.model)("OrderForm", orderFormSchema);
