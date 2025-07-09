import express from "express"
import { protectRoute } from "../middleware/auth.middle.js";
import {signup,login,logout,checkAuth,updateProfile} from "../controllers/auth.js"
const router = express.Router()
router.get("/",(req,res)=>{
    res.send("Saiyan")
})
router.post("/signup",signup );
router.post("/login",login)
router.post("/logout",logout)
router.get("/check",protectRoute,checkAuth)
router.put("/update-profile",protectRoute,updateProfile)
export default router;
