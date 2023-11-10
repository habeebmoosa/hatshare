import { FileModel } from "../model/file.model.js";
import multer from 'multer';
import crypto from 'crypto';
import { storage as firebaseStorage } from "../uploads/firebase.js";
import {
    getDownloadURL,
    ref,
    uploadBytes
} from "firebase/storage";

const storage = multer.memoryStorage();

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
            
            const uploadFile = req.file;

            const uuid = crypto.randomUUID();
            const fileName = uploadFile.originalname;

            const storeFile = ref(firebaseStorage, `files/${uuid + fileName}`);
            await uploadBytes(storeFile, uploadFile.buffer);


            const file = new FileModel({
                name: fileName,
                path: `files/${uuid + fileName}`,
                size: req.file.size,
                uid: uuid,
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

        const storageRef = ref(firebaseStorage, file.path);
        const url = await getDownloadURL(storageRef);
        res.redirect(url); 

    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};