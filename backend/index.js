import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter   from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import tourRouter from './routes/tours.js';
import bodyparser from 'body-parser';
import reviewRouter from './routes/review.js';

const corsOptions = {
    origin : true , 
    credentials : true
}


const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(bodyparser.json())
app.use(cors(corsOptions))

dotenv.config();



mongoose.connect(process.env.MONGO_CONN).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

app.use('/api/v1/users' , userRouter);
app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/tours' , tourRouter);
app.use('/api/v1/review' , reviewRouter);

const port = 8080;





app.listen(port , ()=> {
    console.log(`server is running on ${port}`);
})

