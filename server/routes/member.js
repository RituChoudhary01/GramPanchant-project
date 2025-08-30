import express from "express";
import { addMember, deleteMember, getMembers } from "../controllers/memberController.js";

const router = express.Router();
// GET all members
router.get("/", getMembers);
// POST add member (admin only)
router.post("/", addMember);
// DELETE member (admin only)
router.delete("/:id", deleteMember);

export default router;
