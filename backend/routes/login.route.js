import express from "express";
import { authenticateUser } from "../controller/login.controller.js";
const router = express.Router();

router.post("/login", authenticateUser);

export default router;
