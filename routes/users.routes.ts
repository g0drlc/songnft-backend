import express from "express";
import UsersController from "../controllers/users.controller";

const router = express.Router();

// // Get All users that didn't claim yet.
// router.get("/", UsersController.getAllUsersData);
// Get the all user info
router.get("/", UsersController.getAllUsers);
// Get the user info
router.get("/:userId", UsersController.getUserForEmail);

// Create UserData
router.post("/create", UsersController.createUsers);

// Follow UserData
router.post("/follow", UsersController.followUnfollowUser);

export default router;
