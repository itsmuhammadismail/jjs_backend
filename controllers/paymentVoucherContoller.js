import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import PaymentVoucher from "../models/paymentVoucherModel.js";
import JJSFreight from "../models/jjsFreightModel.js";
import puppeteer from "puppeteer";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import paymentVoucherPdf from "./pdf/paymentVoucherPdf.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

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

// @desc    Get payment Voucher
// @route   GET /api/getpaymentvoucher
// @access  protect
export const getPaymentVoucher = asyncHandler(async (req, res) => {
  const paymentvoucher = await PaymentVoucher.find({ approve: true }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(paymentvoucher);
});

// @desc    Get payment Voucher
// @route   GET /api/getpaymentvoucherNA
// @access  protect
export const getPaymentVoucherNA = asyncHandler(async (req, res) => {
  const paymentvoucher = await PaymentVoucher.find({ approve: false }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(paymentvoucher);
});

// @desc    Update payment Voucher
// @route   PUT /api/updatepaymentvoucher/:id
// @access  protect
export const updatePaymentVoucher = asyncHandler(async (req, res) => {
  const { approve } = req.body;
  const paymentvoucher = await PaymentVoucher.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      approve: JSON.parse(approve),
    }
  );
  res.status(200).json(paymentvoucher);
});

// @desc    Get PDF of Payment voucher
// @route   GET /api/paymentvoucherPdf
// @access  protect
export const pdfPaymentVoucher = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const paymentvoucher = await PaymentVoucher.findById(req.params.id).populate(
    "jjsfreight",
    "job_no"
  );
  const browser = await puppeteer.launch({
    headless: true,
  });

  // create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  // const html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  const html = paymentVoucherPdf(paymentvoucher);
  console.log(typeof html);
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  // create a pdf buffer
  const pdfBuffer = await page.pdf({
    format: "A4",
  });

  // or a .pdf file
  await page.pdf({
    format: "A4",
    path: `${__dirname}/pdf/payment_voucher.pdf`,
  });

  // close the browser
  await browser.close();

  res.download(`${__dirname}/pdf/payment_voucher.pdf`);
});
