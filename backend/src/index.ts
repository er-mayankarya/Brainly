import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const app = express();
app.use(express.json());


//Sign Up Endpoint
app.post('/api/v1/signup' , (req , res) => {

});

//Signin Endpoint
app.post('/api/v1/sigin' , (req , res) => {

});

//Create Content Endpoint
app.post('/api/v1/content' , (req , res) => {

});

//Get Existing Content Endpoint
app.get('/api/v1/content' , (req , res) => {

});

//Delete Existing content Endpoint
app.delete('/api/v1/content' , (req , res) => {

});

// Share Endpint
app.post('/api/v1/brain/share' , (req , res) => {

});

// Get information with share link Endpoint
app.get('/api/v1/brain/:shareLink' , (req , res) => {

});

//Server Listen Port - 3000
async function main(){
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to DB");
    app.listen(3000 , () => {
        console.log("Server listening at port 3000");
    });
}
main();
