import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ContenTModel, UserModel } from "./db";
import { JWT_SECRET } from "./config";
import { userMiddleware } from "./middlewares";

const app = express();
app.use(express.json());

//Sign Up Endpoint
app.post("/api/v1/signup", async (req, res) => {
  //TODO : zod validation , hashing , try catch , if user exist return status code 411 etc
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username,
      password,
    });

    res.send({
      message: "User Signed Up",
    });
  } catch (error) {
    res.status(411).send({
      message: "User already exists",
    });
  }
});

//Signin Endpoint
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
    password,
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_SECRET
    );

    res.header("authorization", token);

    res.send({
      token,
    });
  } else {
    res.status(403).send({
      message: "Incorrect Credintials",
    });
  }
});

//Create Content Endpoint
app.post("/api/v1/content", userMiddleware , async (req, res) => {
  const { link, type, title } = req.body;
  await ContenTModel.create({
    link,
    type,
    title,
    //@ts-ignore
    userId: req.userId,
    tags: [],
  });
  res.json({
    message: "Content Added",
  });
});

//Get Existing Content Endpoint
app.get("/api/v1/content", userMiddleware , async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await ContenTModel.find({
    userId : userId
  }).populate("userId" , "username")

  res.send({
    content
  })
});

//Delete Existing content Endpoint
app.delete("/api/v1/content", userMiddleware , async (req, res) => {
  const contentId = req.body.contentId;
  await ContenTModel.deleteMany({
    contentId ,
    //@ts-ignore
    userId : req.userId
  })

  res.json({
    message : "Content Deleted"
  })
});

// Share Endpint
app.post("/api/v1/brain/share", (req, res) => {});

// Get information with share link Endpoint
app.get("/api/v1/brain/:shareLink", (req, res) => {});

//Connecting to DB & Server Listen Port - 3000
async function main() {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Connected to DB");
  app.listen(process.env.PORT, () => {
    console.log("Server listening at port 3000");
  });
}
main();
