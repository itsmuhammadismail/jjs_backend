const express = require("express");
const { paymentVoucher } = require("../controllers/paymentVoucherContoller.js");
const {
  getPaymentVoucher,
} = require("../controllers/paymentVoucherContoller.js");
const {
  updatePaymentVoucher,
  getPaymentVoucherNA,
  pdfPaymentVoucher,
} = require("../controllers/paymentVoucherContoller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.post("/paymentvoucher", protect, paymentVoucher);
router.get("/getpaymentvoucher", protect, getPaymentVoucher);
router.get("/getpaymentvoucherNA", protect, getPaymentVoucherNA);
router.get("/pdfPaymentVoucher/:id", pdfPaymentVoucher);
router.put("/updatepaymentvoucher/:id", protect, updatePaymentVoucher);

module.exports = router
