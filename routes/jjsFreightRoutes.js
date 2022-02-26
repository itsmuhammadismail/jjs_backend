import express from "express";
import { jjsFreight } from "../controllers/jjsFreightContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/jjsfreight", protect, jjsFreight);

export default router;
