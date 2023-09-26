import express from 'express';
import { downloadFile, showDownloadFile, uploadFile } from '../controller/file.controller.js';

const router = express.Router();

router.post('/', uploadFile);
router.get('/:uid', showDownloadFile);
router.get('/download/:uid', downloadFile);

export { router as fileRouter}