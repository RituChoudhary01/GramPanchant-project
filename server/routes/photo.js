import express from "express";
import { getPhotos, addPhoto, deletePhoto } from "../controllers/photoController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", getPhotos);
router.post("/", upload.single("image"), addPhoto);
router.delete("/:id", deletePhoto);

export default router;

