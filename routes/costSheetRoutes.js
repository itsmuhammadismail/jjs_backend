import express from "express";
import { costSheet } from "../controllers/costSheetContoller.js";
import { getCostSheet } from "../controllers/costSheetContoller.js";
import { updateCostSheet } from "../controllers/costSheetContoller.js";


import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/costsheet", protect, costSheet);
router.get("/getcostsheet", protect, getCostSheet);
router.put("/updatecostsheet/:id", protect, updateCostSheet);


export default router;
