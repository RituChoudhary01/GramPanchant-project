// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { v2 as cloudinary } from "cloudinary";

// Import Routers
import panchayatRoutes from "./routes/panchayat.js";
import photosRoutes from "./routes/photo.js";
import newsRoutes from "./routes/news.js";
import membersRoutes from "./routes/Member.js";

dotenv.config();

// ------------------ DATABASE ------------------ //
connectDB();

// ------------------ CLOUDINARY ------------------ //
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// ------------------ EXPRESS APP ------------------ //
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ------------------ ROUTES ------------------ //
app.use("/api/panchayat", panchayatRoutes);
app.use("/api/photos", photosRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/members", membersRoutes);

// ------------------ DEFAULT ROUTE ------------------ //
app.get("/", (req, res) => {
  res.send("Welcome to Gram Panchayat API");
});

// ------------------ START SERVER ------------------ //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



