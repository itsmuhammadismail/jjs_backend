import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import PaymentVoucher from "../models/paymentVoucherModel.js";
import JJSFreight from "../models/jjsFreightModel.js";

// @desc    Add new payment Voucher
// @route   POST /api/paymentvoucher
// @access  Protect

export const paymentVoucher = asyncHandler(async (req, res) => {
  const {
    receipt_date,
    cash_cheque_no,
    amount,
    bank,
    the_sum_of,
    paid_to,
    being,
    customer,
    accountant,
    job_no,
  } = req.body;

  const jjs = await JJSFreight.findOne({ job_no });
  var jjs_id;
  if (jjs) {
    jjs_id = jjs.id;
  } else {
    res.status(400);
    throw new Error("JJSFreight ID not found");
  }

  // Create paymentVoucher
  const paymentvoucher = await PaymentVoucher.create({
    receipt_date,
    cash_cheque_no,
    amount,
    bank,
    the_sum_of,
    paid_to,
    being,
    customer,
    accountant,
    user: req.user._id,
    jjsfreight: jjs_id,
  });

  if (paymentvoucher) {
    res.status(201).json({
      id: paymentvoucher.id,
      status: "success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid payment voucher data");
  }
});
