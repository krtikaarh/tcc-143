import express from "express";
import * as NoteController from "../controllers/UserController.js";

const router = express.Router();

router.get("/notes", NoteController.getAllNotes);
router.get("/notes/:id", NoteController.getNote);
router.post("/notes", NoteController.createNote);
router.put("/notes/:id", NoteController.updateNote);
router.delete("/notes/:id", NoteController.deleteNote);

export default router;
