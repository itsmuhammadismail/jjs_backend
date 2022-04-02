const express = require("express");
const { receiptVoucher } = require("../controllers/receiptVoucherContoller.js");
const {
  getrReceiptVoucher,
  getrReceiptVoucherNA,
  pdfRecieptVoucher,
} = require("../controllers/receiptVoucherContoller.js");
const {
  updateReceiptVoucher,
} = require("../controllers/receiptVoucherContoller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.post("/receiptvoucher", protect, receiptVoucher);
router.get("/getreceiptvoucher", protect, getrReceiptVoucher);
router.get("/getreceiptvoucherNA", protect, getrReceiptVoucherNA);
router.get("/pdfReceiptVoucher/:id", pdfRecieptVoucher);
router.put("/updatereceiptvoucher/:id", protect, updateReceiptVoucher);

module.exports = router
