import express from "express";
import { costSheet, pdfCostsheet } from "../controllers/costSheetContoller.js";
import {
  getCostSheet,
  getCostSheetNA,
} from "../controllers/costSheetContoller.js";
import { updateCostSheet } from "../controllers/costSheetContoller.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/costsheet", protect, costSheet);
router.get("/getcostsheet", protect, getCostSheet);
router.get("/getcostsheetNA", protect, getCostSheetNA);
router.get("/pdfCostsheet/:id", pdfCostsheet);
router.put("/updatecostsheet/:id", protect, updateCostSheet);

export default router;
