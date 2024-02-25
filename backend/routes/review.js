import express from 'express';
import { createReview } from '../controller/review.controller.js';


const router = express.Router();


router.post('/:tourId' ,createReview);

export default router;