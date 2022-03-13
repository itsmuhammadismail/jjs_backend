import express from "express";
import { paymentVoucher } from "../controllers/paymentVoucherContoller.js";
import { getPaymentVoucher } from "../controllers/paymentVoucherContoller.js";
import {
  updatePaymentVoucher,
  getPaymentVoucherNA,
  pdfPaymentVoucher,
} from "../controllers/paymentVoucherContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/paymentvoucher", protect, paymentVoucher);
router.get("/getpaymentvoucher", protect, getPaymentVoucher);
router.get("/getpaymentvoucherNA", protect, getPaymentVoucherNA);
router.get("/pdfPaymentVoucher/:id", pdfPaymentVoucher);
router.put("/updatepaymentvoucher/:id", protect, updatePaymentVoucher);

export default router;
