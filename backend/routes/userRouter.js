import express from 'express';
import { createUser, getallUsers, getsingleUser, updateUser } from '../controller/user.controller.js';


const router = express.Router();



// router.post('/login' , Login);

router.post('/' , createUser);
router.get('/' , getallUsers);
router.get('/:id' , getsingleUser);
router.put('/:id' , updateUser);



export default router;