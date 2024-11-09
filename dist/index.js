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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const uploadMusic_routes_1 = __importDefault(require("./routes/uploadMusic.routes"));
const app = (0, express_1.default)();
const port = config_1.config.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", users_routes_1.default);
app.use("/music", uploadMusic_routes_1.default);
// MongoDB Connection
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect("mongodb+srv://tardisabs:EFmdz1t6Dd8MoCH4@tardiscluster.6m3r4yv.mongodb.net/song_nfts")
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("==========> Server is running! ⏲  <==========");
    app.listen(port, () => {
        console.log(`==========> Connected MongoDB 👌  <==========`);
    });
}))
    .catch((err) => {
    console.log("Cannot connect to the bot! 😩", err);
    process.exit();
});
// Routes
app.get("/", (req, res) => {
    res.send("Server is running.👌");
});
