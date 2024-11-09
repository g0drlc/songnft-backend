import mongoose from "mongoose";

const followersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  userWallet: { type: String, required: true },
  userEmail: { type: String, required: true },
  avatarImgUrl: { type: String },
});

const usersSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const usersModal = mongoose.model("users", usersSchema);
