import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import NoteRoutes from "./routes/UserRoute.js";
import db from "./config/Database.js";
import Note from "./models/UserModel.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", NoteRoutes);

const PORT = process.env.PORT || 5000;
console.log("PORT:", PORT);

const startServer = async () => {
    try {
        await db.authenticate();
        console.log("Database connected...");
        await db.sync(); // Sinkronisasi model ke database
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Connection error:", error);
    }
};

startServer();
