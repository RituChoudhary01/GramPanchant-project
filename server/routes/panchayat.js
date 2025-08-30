import express from "express";
import { getPanchayat, updatePanchayat } from "../controllers/panchayatController.js";

const router = express.Router();
router.get("/", getPanchayat);
router.put("/", updatePanchayat);

export default router;
