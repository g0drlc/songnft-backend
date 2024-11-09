import express from "express";
import UploadMusicController from "../controllers/uploadMusic.controller";

const router = express.Router();
// // Get the all user info
router.get("/profile", UploadMusicController.getAllUploadMusic);
// // Get the user info
// router.get("/:userId", UploadMusicController.getUserForEmail);

// Create Music
router.post("/create", UploadMusicController.createMusic);

// // Follow UserData
// router.post("/follow", UploadMusicController.followUnfollowUser);

export default router;
