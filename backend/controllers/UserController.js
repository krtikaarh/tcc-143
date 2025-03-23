import Note from "../models/UserModel.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ message: "Title and content are required" });

        const newNote = await Note.create({ title, content });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.findByPk(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found" });

        await note.update({ title, content });
        res.json({ message: "Note updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found" });

        await note.destroy();
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
