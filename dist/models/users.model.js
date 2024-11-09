"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersModal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const followersSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    userWallet: { type: String, required: true },
    userEmail: { type: String, required: true },
    avatarImgUrl: { type: String },
});
const usersSchema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    userId: { type: String, require: true },
    email: { type: String, require: true },
    userWallet: { type: String, required: true },
    bio: { type: String, require: true },
    twitterUrl: { type: String },
    discordUrl: { type: String },
    followers: [followersSchema],
    avatarImgUrl: { type: String },
    bannerImgUrl: { type: String },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
exports.usersModal = mongoose_1.default.model("users", usersSchema);
