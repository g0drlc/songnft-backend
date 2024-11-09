import mongoose from "mongoose";

const uploadMusicSchema = new mongoose.Schema(
  {
    userWallet: { type: String, require: true },
    metaDataUrl: { type: String, require: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const uploadMusicModal = mongoose.model(
  "uploadMusics",
  uploadMusicSchema
);
