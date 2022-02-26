import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import ReceiptVoucher from "../models/receiptVoucherModel.js";
import JJSFreight from "../models/jjsFreightModel.js";

// @desc    Add new receipt voucher
// @route   POST /api/receiptvoucher
// @access  Protect

export const receiptVoucher = asyncHandler(async (req, res) => {
  const {
    receipt_date,
    cash_cheque_no,
    amount,
    bank,
    the_sum_of,
    recieved_from,
    being,
    customer,
    accountant,
    job_no,
abc
  } = req.body;

  const jjs = await JJSFreight.findOne({ job_no });
  var jjs_id;
  if (jjs) {
    jjs_id = jjs.id;
  } else {
    res.status(400);
    throw new Error("JJSFreight ID not found");
  }

  // Create receiptVoucher
  const receiptvoucher = await ReceiptVoucher.create({
    receipt_date,
    cash_cheque_no,
    amount,
    bank,
    the_sum_of,
    recieved_from,
    being,
    customer,
    accountant,
    user: req.user._id,
    jjsfreight: jjs_id,
  });

  if (receiptvoucher) {
    res.status(201).json({
      _id:receiptvoucher.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid receipt voucher data");
  }
});