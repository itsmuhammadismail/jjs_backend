import express from "express";
import { getJobNo } from "../controllers/jobNoController.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get("/jobno", getJobNo);

export default router;
