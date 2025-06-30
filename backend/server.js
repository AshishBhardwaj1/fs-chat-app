
import express from "express"
// const dotenv  =require("dotenv")
import authRoutes from "./routes/auth.routes.js"

const app = express()
const  port = process.env.PORT|| 5000;

app.use("/api/auth", authRoutes)

app.get("/",(req,res)=>{
    res.send("hello!!")
})

app.get("/api/auth/signup" ,(req,res)=>{
    res.send("signup route")
})
app.listen(port, ()=>
    console.log(`app is listenenng in ${port}`)
    
)