
import express from "express"
import cookieParser from "cookie-parser";
// const dotenv  =require("dotenv")
import dotenv from"dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/message.routes.js"
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
dotenv.config();
// const __dirname = path.resolve();
const  port = process.env.PORT|| 5000;



app.listen(port, ()=>

    {
    connectToMongoDb()
    console.log(`app is listenenng in ${port}`)
    
})