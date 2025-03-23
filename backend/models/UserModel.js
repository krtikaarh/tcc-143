import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Note = db.define(
    "note", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true, 
});

export default Note;