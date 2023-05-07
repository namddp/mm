import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

//Connect to MongoDB
export async function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECT_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    })
};

//Define users collection
export const usersCollection = mongoose.connection.collection("users");