import express from "express";
import { receiptVoucher} from "../controllers/receiptVoucherContoller.js";
import { getrReceiptVoucher} from "../controllers/receiptVoucherContoller.js";
import { updateReceiptVoucher} from "../controllers/receiptVoucherContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/receiptvoucher", protect, receiptVoucher);
router.get("/getreceiptvoucher", protect, getrReceiptVoucher);
router.put("/updatereceiptvoucher/:id", protect, updateReceiptVoucher);


export default router;
