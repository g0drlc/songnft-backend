"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadMusic_controller_1 = __importDefault(require("../controllers/uploadMusic.controller"));
const router = express_1.default.Router();
// // Get the all user info
// router.get("/", UploadMusicController.getAllUsers);
// // Get the user info
// router.get("/:userId", UploadMusicController.getUserForEmail);
// Create Music
router.post("/create", uploadMusic_controller_1.default.createMusic);
// // Follow UserData
// router.post("/follow", UploadMusicController.followUnfollowUser);
exports.default = router;
