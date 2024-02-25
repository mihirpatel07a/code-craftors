import express from 'express';
import { createBooking, gateBooking, gateallBooking } from '../controller/booking.controller.js';
import { verifyUSer } from '../verifyToken.js';

const router = express.Router();


router.post('/'  , createBooking);
router.get('/:id'  , gateBooking);
router.get('/' , gateallBooking);
export default router;