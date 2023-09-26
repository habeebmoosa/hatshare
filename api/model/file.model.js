import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    uid: String,
}, { timestamps: true });

export const FileModel = mongoose.model('File', fileSchema);

