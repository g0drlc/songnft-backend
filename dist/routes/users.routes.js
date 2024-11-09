"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = express_1.default.Router();
// // Get All users that didn't claim yet.
// router.get("/", UsersController.getAllUsersData);
// Get the all user info
router.get("/", users_controller_1.default.getAllUsers);
// Get the user info
router.get("/:userId", users_controller_1.default.getUserForEmail);
// Create UserData
router.post("/create", users_controller_1.default.createUsers);
// Follow UserData
router.post("/follow", users_controller_1.default.followUnfollowUser);
exports.default = router;
