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
const users_model_1 = require("../models/users.model");
function saveUserData(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Check if the user with the given email already exists
            const existingUser = yield users_model_1.usersModal.findOne({ email: userData.email });
            if (existingUser) {
                // Update the existing user
                existingUser.set(userData);
                yield existingUser.save();
                console.log("User data updated successfully!");
            }
            else {
                // Create a new user
                const newUser = new users_model_1.usersModal(userData);
                yield newUser.save();
                console.log("User data saved successfully!");
            }
        }
        catch (error) {
            console.error("Error saving/updating user data:", error);
        }
    });
}
// Save the confirm data to database
class UsersController {
    constructor() {
        this.createUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { userData } = req.body;
                yield saveUserData(userData);
                const updatedData = yield users_model_1.usersModal.findOne({
                    email: userData.email,
                });
                res.status(201).json({
                    message: "User created successfully",
                    type: "success",
                    data: updatedData,
                });
            }
            catch (error) {
                console.error("Error saving user data:", error);
                res.status(500).json({ error: "Error creating user" });
            }
        });
        this.followUnfollowUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { followerData, userWallet } = req.body;
                // Find the user document
                const userDoc = yield users_model_1.usersModal.findOne({
                    userWallet: userWallet,
                });
                // Check if the followerData exists in the followers array
                const existingFollower = userDoc === null || userDoc === void 0 ? void 0 : userDoc.followers.find((follower) => follower.userWallet === followerData.userWallet);
                if (existingFollower) {
                    // Remove the followerData from the followers array
                    const updatedUser = yield users_model_1.usersModal.findOneAndUpdate({ userWallet: userWallet }, { $pull: { followers: { userWallet: followerData.userWallet } } }, { new: true });
                    res.status(200).json({
                        message: "User unfollowed successfully",
                        type: "success",
                        data: updatedUser,
                    });
                }
                else {
                    // Add the followerData to the followers array
                    const updatedUser = yield users_model_1.usersModal.findOneAndUpdate({ userWallet: userWallet }, { $push: { followers: followerData } }, { new: true });
                    res.status(200).json({
                        message: "User followed successfully",
                        type: "success",
                        data: updatedUser,
                    });
                }
            }
            catch (error) {
                console.error("Error following/unfollowing user:", error);
                res.status(500).json({ error: "Error following/unfollowing user" });
            }
        });
        // Find all users with claimable status.
        // public getAllUsersData = async (res: Response) => {
        //   try {
        //     const data = await receivedTXModal.find({
        //       claimedStatus: false,
        //     });
        //     res.send(data);
        //   } catch (err) {
        //     res.status(500).send({
        //       message: err,
        //     });
        //   }
        // };
        // Find user with claimable status and same addr
        this.getUserForEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            console.log("userId", userId);
            try {
                const data = yield users_model_1.usersModal.findOne({
                    userId: userId,
                });
                if (data === null) {
                    res.send({
                        name: "",
                        userId: "",
                        email: "",
                        bio: "",
                        twitterUrl: "",
                        discordUrl: "",
                        followers: 0,
                        avatarImgUrl: "",
                        bannerImgUrl: "",
                    });
                }
                else {
                    res.send(data);
                }
            }
            catch (err) {
                res.status(500).send({
                    message: err,
                });
            }
        });
        // Find All users that can follow
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield users_model_1.usersModal.find({});
                res.send(data);
            }
            catch (err) {
                res.status(500).send({
                    message: err,
                });
            }
        });
    }
}
exports.default = new UsersController();
