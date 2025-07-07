
import express from "express"
import cookieParser from "cookie-parser";
// const dotenv  =require("dotenv")
import dotenv from"dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";

app.use(express.json())
app.use(cookieParser())

const  port = process.env.PORT|| 5000;
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes)
dotenv.config();
// const __dirname = path.resolve();



server.listen(port, ()=>

    {
    connectToMongoDb()
    console.log(`app is listenenng in ${port}`)
    
})