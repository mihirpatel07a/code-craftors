import express from 'express';
import { createUser, getallUsers, getsingleUser, updateUser , getUserCount, deleteUser } from '../controller/user.controller.js';
import { verifyAdmin, verifyUSer } from '../verifyToken.js';

const router = express.Router();



// router.post('/login' , Login);

router.post('/' ,verifyUSer ,  createUser);
router.get('/' , getallUsers);
router.get('/:id' , verifyUSer , getsingleUser);
router.put('/:id' ,verifyUSer ,  updateUser);
router.get('/count' , getUserCount);
router.delete('/:id' , deleteUser);



export default router;