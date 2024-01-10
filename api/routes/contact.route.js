import express from 'express';
import { sendContact } from '../controller/contact.controller.js';

const router = express.Router();

router.post('/', sendContact);

export { router as contactRouter}