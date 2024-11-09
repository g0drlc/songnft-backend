"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMusicModal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uploadMusicSchema = new mongoose_1.default.Schema({
    userWallet: { type: String, require: true },
    metaDataUrl: { type: String, require: true },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
exports.uploadMusicModal = mongoose_1.default.model("uploadMusics", uploadMusicSchema);
