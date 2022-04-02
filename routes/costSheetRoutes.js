const express = require("express");
const {
  costSheet,
  pdfCostsheet,
} = require("../controllers/costSheetContoller.js");
const {
  getCostSheet,
  getCostSheetNA,
} = require("../controllers/costSheetContoller.js");
const { updateCostSheet } = require("../controllers/costSheetContoller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.post("/costsheet", protect, costSheet);
router.get("/getcostsheet", protect, getCostSheet);
router.get("/getcostsheetNA", protect, getCostSheetNA);
router.get("/pdfCostsheet/:id", pdfCostsheet);
router.put("/updatecostsheet/:id", protect, updateCostSheet);

module.exports = router
