import express from "express";
import { addInvoice } from "../controllers/addInvoiceContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/addinvoice", protect, addInvoice);

export default router;
