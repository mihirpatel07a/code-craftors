import express from 'express';
import { createBooking, gateBooking, gateallBooking } from '../controller/booking.controller.js';
import { verifyUSer } from '../verifyToken.js';

const router = express.Router();


router.post('/' ,verifyUSer , createBooking);
router.get('/:id' , verifyUSer , gateBooking);
router.get('/' , verifyUSer , gateallBooking);
export default router;