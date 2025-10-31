import express from "express"
import { forgotPassword, loginUser, logoutUser, resetPassword, signUpUser } from "../controllers/auth.controllers.js"

const router  = express.Router()

router.post("/signup",signUpUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword/:token",resetPassword)
export default router