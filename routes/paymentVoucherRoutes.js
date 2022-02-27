import express from "express";
import { paymentVoucher } from "../controllers/paymentVoucherContoller.js";
import { getPaymentVoucher } from "../controllers/paymentVoucherContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/paymentvoucher", protect, paymentVoucher);
router.get("/getpaymentvoucher", protect, getPaymentVoucher);


export default router;
