import express from "express";
import { addInvoice } from "../controllers/addInvoiceContoller.js";
import { getInvoice } from "../controllers/addInvoiceContoller.js";
import { updateInvoice } from "../controllers/addInvoiceContoller.js";


import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/addinvoice", protect, addInvoice);
router.get("/getinvoice", protect, getInvoice);
router.put("/updateinvoice/:id", protect, updateInvoice);


export default router;
