import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
//middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(cookieParser())
app.use(express.json({limit : "20kb"}))
app.use(express.urlencoded({extended : true, limit: "16kb"}))
app.use(express.static("public"));



// routes import 
import userRouter from './routes/user.routes.js'
app.use("/api/v1/users", userRouter);


import taskRouter from './routes/task.routes.js'
app.use("/api/v1/tasks", taskRouter)


export { app }