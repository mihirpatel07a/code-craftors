import express from 'express';
import { createUser, getallUsers, getsingleUser, updateUser } from '../controller/user.controller.js';
import { verifyAdmin, verifyUSer } from '../verifyToken.js';

const router = express.Router();



// router.post('/login' , Login);

router.post('/' ,verifyUSer ,  createUser);
router.get('/' ,verifyAdmin, getallUsers);
router.get('/:id' , verifyUSer , getsingleUser);
router.put('/:id' ,verifyUSer ,  updateUser);



export default router;