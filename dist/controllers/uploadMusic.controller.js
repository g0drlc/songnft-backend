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
Object.defineProperty(exports, "__esModule", { value: true });
const uploadMusic_model_1 = require("../models/uploadMusic.model");
// Save the confirm data to database
class MusicUploadController {
    constructor() {
        this.createMusic = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { userWallet, metaDataUrl } = req.body;
                const updatedData = yield uploadMusic_model_1.uploadMusicModal.create({
                    userWallet: userWallet,
                    metaDataUrl: metaDataUrl,
                });
                res.status(201).json({
                    message: "Music uploaded successfully",
                    type: "success",
                    data: updatedData,
                });
            }
            catch (error) {
                console.error("Error saving user data:", error);
                res.status(500).json({ error: "Error creating user" });
            }
        });
    }
}
exports.default = new MusicUploadController();
