import { FileModel } from "../model/file.model.js";
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'api/uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }, 
}).single('myfile'); 

export const uploadFile = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: "File upload failed", message: err.message });
            }
            
            const file = new FileModel({
                name: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                uid: uuidv4(),
            });

            const response = await file.save();

            res.json({ file: `${process.env.APP_BASE_URL}/download/${response.uid}` });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


export const showDownloadFile = async (req, res) => {
    try {
        const uid = req.params.uid;
        const file = await FileModel.findOne({ uid: uid });

        if (!file) {
            return res.status(404).json({ error: 'No file found' });
        }else{
            return res.status(200).json({
                name: file.name,
                size: file.size / 1000000 + ' MB',
                uid: file.uid,
                path: file.path,
            });
        }

    } catch (error) {
        res.status(500).json(error);
    }
};

export const downloadFile = async (req, res) => {
    try {
        const uid = req.params.uid;
        const file = await FileModel.findOne({ uid: uid });

        if(!file){
            return res.status(404).json({ error: 'No file found' });
        }

        const baseDirectory = path.resolve();
        const filePath = `${baseDirectory}/${file.path}`;

        res.setHeader('Content-Type', 'multipart/form-data');
        res.setHeader('Content-Disposition', `attachment; filename="${file.originalName}"`);

        res.download(filePath);

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};