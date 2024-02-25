import express from 'express';
import { createReview } from '../controller/review.controller.js';
import { verifyUSer } from '../verifyToken.js';

const router = express.Router();


router.post('/:tourId' ,verifyUSer ,createReview);

export default router;