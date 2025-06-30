
import express from "express"
// const dotenv  =require("dotenv")
import dotenv from"dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";


dotenv.config();

// const __dirname = path.resolve();
const app = express()
const  port = process.env.PORT|| 5000;

app.use("/api/auth", authRoutes)

app.get("/",(req,res)=>{
    res.send("hello!!")
})


app.listen(port, ()=>

    {
    connectToMongoDb()
    console.log(`app is listenenng in ${port}`)
    
})