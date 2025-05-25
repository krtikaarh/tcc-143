import express from "express";
import * as NotesController from "../controllers/NotesController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// Semua route notes dilindungi oleh verifyToken
router.get("/notes", NotesController.getAllNotes);
router.get("/notes/:id", verifyToken, NotesController.getNote);
router.post("/notes", verifyToken, NotesController.createNote);
router.put("/notes/:id", verifyToken, NotesController.updateNote);
router.delete("/notes/:id", verifyToken, NotesController.deleteNote);

export default router;
