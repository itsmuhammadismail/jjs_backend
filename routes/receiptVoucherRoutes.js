import express from "express";
import { receiptVoucher} from "../controllers/receiptVoucherContoller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/receiptvoucher", protect, receiptVoucher);

export default router;
