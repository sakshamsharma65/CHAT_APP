import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import { connectDB } from "./lib/db.js";

import {server,app} from "./lib/socket.js"
dotenv.config();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

 app.use(express.json({ limit: '10mb' })
);
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
