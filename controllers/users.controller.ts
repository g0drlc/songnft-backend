import { Request, Response } from "express";

import { usersModal } from "../models/users.model";
import { config } from "../config";

type UserDataType = {
  name: string;
  userId: string;
  email: string;
  bio: string;
  followers: number;
  avatarImgUrl: string;
  bannerImgUrl: string;
  twitterUrl: string;
  discordUrl: string;
};

async function saveUserData(userData: UserDataType): Promise<void> {
  try {
    // Check if the user with the given email already exists
    const existingUser = await usersModal.findOne({ email: userData.email });

    if (existingUser) {
      // Update the existing user
      existingUser.set(userData);
      await existingUser.save();
      console.log("User data updated successfully!");
    } else {
      // Create a new user
      const newUser = new usersModal(userData);
      await newUser.save();
      console.log("User data saved successfully!");
    }
  } catch (error) {
    console.error("Error saving/updating user data:", error);
  }
}

// Save the confirm data to database
class UsersController {
  public createUsers = async (req: Request, res: Response) => {
    try {
      const { userData } = req.body;
      await saveUserData(userData);
      const updatedData = await usersModal.findOne({
        email: userData.email,
      });
      res.status(201).json({
        message: "User created successfully",
        type: "success",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error saving user data:", error);
      res.status(500).json({ error: "Error creating user" });
    }
  };

  public followUnfollowUser = async (req: Request, res: Response) => {
    try {
      const { followerData, userWallet } = req.body;

      // Find the user document
      const userDoc = await usersModal.findOne({
        userWallet: userWallet,
      });

      // Check if the followerData exists in the followers array
      const existingFollower = userDoc?.followers.find(
        (follower) => follower.userWallet === followerData.userWallet
      );

      if (existingFollower) {
        // Remove the followerData from the followers array
        const updatedUser = await usersModal.findOneAndUpdate(
          { userWallet: userWallet },
          { $pull: { followers: { userWallet: followerData.userWallet } } },
          { new: true }
        );

        res.status(200).json({
          message: "User unfollowed successfully",
          type: "success",
          data: updatedUser,
        });
      } else {
        // Add the followerData to the followers array
        const updatedUser = await usersModal.findOneAndUpdate(
          { userWallet: userWallet },
          { $push: { followers: followerData } },
          { new: true }
        );

        res.status(200).json({
          message: "User followed successfully",
          type: "success",
          data: updatedUser,
        });
      }
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
      res.status(500).json({ error: "Error following/unfollowing user" });
    }
  };

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
  public getUserForEmail = async (req: Request, res: Response) => {
    const { userId } = req.params;
    console.log("userId", userId);
    try {
      const data = await usersModal.findOne({
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
      } else {
        res.send(data);
      }
    } catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };

  // Find All users that can follow
  public getAllUsers = async (req: Request, res: Response) => {
    try {
      const data = await usersModal.find({});
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };
}

export default new UsersController();
