import express from "express";
import { receiptVoucher} from "../controllers/receiptVoucherContoller.js";
import { getrReceiptVoucher, getrReceiptVoucherNA, pdfRecieptVoucher} from "../controllers/receiptVoucherContoller.js";
import { updateReceiptVoucher} from "../controllers/receiptVoucherContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/receiptvoucher", protect, receiptVoucher);
router.get("/getreceiptvoucher", protect, getrReceiptVoucher);
router.get("/getreceiptvoucherNA", protect, getrReceiptVoucherNA);
router.get("/pdfReceiptVoucher/:id", pdfRecieptVoucher);
router.put("/updatereceiptvoucher/:id", protect, updateReceiptVoucher);


export default router;
