import express from 'express'
import { createTour, deleteTour, getFeaturedTour, getTourBySearch, getTourCount, getallTours, getsingleTour, updateTour } from '../controller/tourController.js'
import { verifyAdmin } from '../verifyToken.js';

const router = express.Router()

router.post('/', verifyAdmin , createTour);
router.get('/' , getallTours);
router.get('/:id' , getsingleTour);
router.get('/search/getTourbySearch' , getTourBySearch);
router.get('/search/getFeaturedTours' , getFeaturedTour);
router.get('/search/getCount' , getTourCount);
router.put('/:id', verifyAdmin  , updateTour);
router.delete('/:id',verifyAdmin ,  deleteTour);

 

export default router;