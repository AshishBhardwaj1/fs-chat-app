import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signUpUser = async (req,res)=>{
    try {
const {fullname ,username ,password ,confirmpassword, gender} = req.body

  if (password!== confirmpassword) {
    return res.status(400).json({error:"password dont match"})
  }

  const user = await User.findOne({username})

  if (user) {

    
    return res.status(400).json({error:"user already exist"})
  }
  
//HASH PASSWORD

const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt)

const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


const newUser = new User({
    fullname,
    username,
    password :hashPassword,
    gender,
    profilePicture:gender=== 'male'? boyProfilePic : girlProfilePic
})

await newUser.save()
res.status(201).json({
    _id :newUser._id,
    fullname:newUser.fullname,
    username:newUser.username,
    profilePicture:newUser.profilePicture
})

}catch(error){
    console.log(error);
    
res.status(500).json({error:"internal server error"})
    }}
export const  loginUser  = async (req,res)=>{
 try {
    
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password,user?.password ||"")
 
    if (user ||isPasswordCorrect) {
        res.send(400).json({error:"invaid user or password"})
    }
    generateTokenAndSetCookie(user._id,res)

    res.status(200).json({
_id :newUser._id,
    fullname:newUser.fullname,
    username:newUser.username,
    profilePicture:newUser.profilePicture


    })
 } catch (error) {
    console.log("error in login");
    res.send(500).json({error:"internal server error"})
    
 }
    
}

export const  logoutUser =  (req,res)=> {
   try{
    res.cookie("jwt","", {maxAge:0})
    res.status(200).json({messagee:"logged out successfully"})

   }
    catch(error){
 console.log("error in logout",error);
    res.send(500).json({error:"internal server error"})
    }
}