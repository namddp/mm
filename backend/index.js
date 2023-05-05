//Setup .env
import dotenv from 'dotenv';
dotenv.config();

//Libs & MDWs
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { connectDB } from './config/connectDB.js';

//Routers
import authRouter from './routes/authRouter.js';


const app = express();
const PORT = process.env.PORT || 8080;

async function main() {
    try {
        //Connect to mongodb
        await connectDB();

        //Set up middlewares
        app.use(express.json());
        app.use(cors());
        app.use("/auth", authRouter);

        //Start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

main();