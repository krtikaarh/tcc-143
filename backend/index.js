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
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: 'API is running ✅',
        status: 'healthy',
        timestamp: new Date().toISOString(),
        endpoints: {
            auth: '/api/login, /api/register',
            notes: '/api/notes'
        }
    });
});

// Health check endpoint tambahan
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoute);   // ✅ auth route
app.use("/api", NotesRoute);  // ✅ notes route

db.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        availableEndpoints: {
            root: '/',
            health: '/health',
            login: 'POST /api/login',
            register: 'POST /api/register',
            notes: 'GET /api/notes'
        }
    });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port}`);
});