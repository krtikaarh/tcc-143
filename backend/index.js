import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";
import db from './config/Database.js';
import AuthRoute from './routes/AuthRoute.js';
import { verifyToken } from "./middleware/VerifyToken.js";
import * as NotesController from "./controllers/NotesController.js"; 
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoute);   // ✅ auth route
app.use("/api", NotesRoute);  // ✅ notes route

db.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.get('/', (req, res) => {
    res.send('API is running ✅');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
