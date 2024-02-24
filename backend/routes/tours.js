import express from 'express'
import { createTour, deleteTour, getallTours, getsingleTour, updateTour } from '../controller/tourController.js'

const router = express.Router()

router.post('/' , createTour);
router.get('/' , getallTours);
router.get('/:id' , getsingleTour);
router.put('/:id' , updateTour);
router.delete('/:id', deleteTour);

 

export default router;