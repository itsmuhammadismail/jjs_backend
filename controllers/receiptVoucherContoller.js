import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import ReceiptVoucher from "../models/receiptVoucherModel.js";
import JJSFreight from "../models/jjsFreightModel.js";
import recieptVoucherPdf from "./pdf/recieptVoucherPdf.js";
import puppeteer from "puppeteer";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

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
      _id: receiptvoucher.id,
      status: "success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid receipt voucher data");
  }
});

// @desc    Get receipt voucher
// @route   GET /api/getreceiptvoucher
// @access  protect
export const getrReceiptVoucher = asyncHandler(async (req, res) => {
  const receiptvoucher = await ReceiptVoucher.find({ approve: true }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(receiptvoucher);
});

// @desc    Get receipt voucher
// @route   GET /api/getreceiptvoucherNA
// @access  protect
export const getrReceiptVoucherNA = asyncHandler(async (req, res) => {
  const receiptvoucher = await ReceiptVoucher.find({ approve: false }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(receiptvoucher);
});

// @desc    Update receipt voucher
// @route   PUT /api/updatereceiptvoucher/:id
// @access  protect
export const updateReceiptVoucher = asyncHandler(async (req, res) => {
  const { approve } = req.body;
  const receiptvoucher = await ReceiptVoucher.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      approve: JSON.parse(approve),
    }
  );
  res.status(200).json(receiptvoucher);
});

// @desc    Get PDF of Reciept voucher
// @route   GET /api/recieptvoucherPdf
// @access  protect
export const pdfRecieptVoucher = asyncHandler(async (req, res) => {
  const receiptvoucher = await ReceiptVoucher.findById(req.params.id).populate(
    "jjsfreight",
    "job_no"
  );
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });

  // create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  // const html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  const html = recieptVoucherPdf(receiptvoucher);

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
    path: `${__dirname}/pdf/reciept_voucher.pdf`,
  });

  // close the browser
  await browser.close();

  res.download(`${__dirname}/pdf/reciept_voucher.pdf`);
});
