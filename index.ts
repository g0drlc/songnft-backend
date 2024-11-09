import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config";
import usersRoute from "./routes/users.routes";
import uploadMusicRoute from "./routes/uploadMusic.routes";
const app = express();
const port = config.PORT;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRoute);
app.use("/music", uploadMusicRoute);

// MongoDB Connection
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://tardisabs:EFmdz1t6Dd8MoCH4@tardiscluster.6m3r4yv.mongodb.net/song_nfts"
  )
  .then(async () => {
    console.log("==========> Server is running! ⏲  <==========");
    app.listen(port, () => {
      console.log(`==========> Connected MongoDB 👌  <==========`);
    });
  })
  .catch((err) => {
    console.log("Cannot connect to the bot! 😩", err);
    process.exit();
  });

// Routes
app.get("/", (req, res) => {
  res.send("Server is running.👌");
});
