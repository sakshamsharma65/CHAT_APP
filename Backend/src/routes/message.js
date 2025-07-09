import express from "express"
import { protectRoute } from "../middleware/auth.middle.js";
import { getUsersForSideBar,getMessages,sendMessage } from "../controllers/message.c.js";

const router = express.Router();

router.get("/user",protectRoute,getUsersForSideBar)
router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)
export default router;