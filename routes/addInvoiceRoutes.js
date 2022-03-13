import express from "express";
import { addInvoice , pdfInvoice} from "../controllers/addInvoiceContoller.js";
import {
  getInvoice,
  getInvoiceNA,
} from "../controllers/addInvoiceContoller.js";
import { updateInvoice } from "../controllers/addInvoiceContoller.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/addinvoice", protect, addInvoice);
router.get("/getinvoice", protect, getInvoice);
router.get("/getinvoiceNA", protect, getInvoiceNA);
router.get("/pdfInvoice/:id", pdfInvoice);
router.put("/updateinvoice/:id", protect, updateInvoice);

export default router;
