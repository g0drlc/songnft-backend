import { Request, Response } from "express";

import { uploadMusicModal } from "../models/uploadMusic.model";

// Save the confirm data to database
class MusicUploadController {
  public createMusic = async (req: Request, res: Response) => {
    try {
      const { userWallet, metaDataUrl } = req.body;
      const updatedData = await uploadMusicModal.create({
        userWallet: userWallet,
        metaDataUrl: metaDataUrl,
      });
      res.status(201).json({
        message: "Music uploaded successfully",
        type: "success",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error saving user data:", error);
      res.status(500).json({ error: "Error creating user" });
    }
  };

  public getAllUploadMusic = async (req: Request, res: Response) => {
    try {
      const data = await uploadMusicModal.find({});
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };
}

export default new MusicUploadController();
