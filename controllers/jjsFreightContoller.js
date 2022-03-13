import asyncHandler from "express-async-handler";
import JJSFreight from "../models/jjsFreightModel.js";
import Customer from "../models/customerModel.js";
import Shipping from "../models/shippingModel.js";
import Vanning from "../models/vanningModel.js";
import CustomerPayment from "../models/customerPaymentModel.js";
import Container from "../models/containerModel.js";
import Checklist from "../models/checklistModel.js";
import jobNoModel from "../models/jobNoModel.js";
import pdf from "html-pdf";
import jjsFreightPdf from "./pdf/jjsFreightPdf.js";
import puppeteer from "puppeteer";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// @desc    Add jjsFreight
// @route   POST /api/jjsfreight
// @access  Protect

export const jjsFreight = asyncHandler(async (req, res) => {
  const {
    receipt_date,
    bill_of_loading,
    job_no,
    invoice_no,
    sales_person,
    customer_name,
    contact_person,
    tel,
    mob,
    email,
    shipping_fee,
    ets,
    eta,
    pol,
    pods,
    volume,
    transporter,
    location,
    contact,
    telephone,
    commodity,
    costed,
    invoiced,
    container_detail,
    ed_no,
    declaration,
    amount,
    done_by,
    certificate,
    weightment,
    bill_of_loading_checklist,
    invoice_type,
    invoice_amount,
    packingList,
    certificate_checklist,
    sg,
    cash,
    ep,
    police_paper,
    exit_paper,
    truck,
  } = req.body;

  let customer_id;
  let checkCustomer = await Customer.findOneAndDelete({
    customer_name: customer_name,
  });

  const newCustomer = await Customer.create({
    customer_name: customer_name,
    contact_person: contact_person,
    tel: tel,
    mob: mob,
    email: email,
  });
  customer_id = newCustomer._id;

  const shipping = await Shipping.create({
    shipping_fee,
    ets,
    eta,
    pol,
    pods,
    volume,
  });

  const vanning = await Vanning.create({
    transporter,
    location,
    contact,
    tel: telephone,
    commodity,
  });

  const customerpayment = await CustomerPayment.create({
    costed,
    invoiced,
  });

  const container = await Container.create({
    container_detail,
    ed_no,
    declaration,
    amount,
  });

  const checklist = await Checklist.create({
    done_by,
    certificate,
    weightment,
    bill_of_loading: bill_of_loading_checklist,
    invoice_type,
    invoice_amount,
    packing_list: packingList,
    certificate_of_origin: certificate_checklist,
    sg,
    cash,
    ep,
    police_paper,
    exit_paper,
    truck,
  });

  let invoiceList = JSON.parse(invoice_no);

  // Create jjsfreight
  const jjsfreight = await JJSFreight.create({
    receipt_date,
    bill_of_loading,
    job_no,
    invoice_no: invoiceList,
    sales_person,
    user: req.user._id,
    customer: customer_id,
    shipping: shipping._id,
    vanning: vanning._id,
    customerpayment: customerpayment._id,
    container: container._id,
    checklist: checklist._id,
  });

  if (jjsfreight) {
    await jobNoModel.findOneAndUpdate({}, { $inc: { job: 1 } });
    res.status(201).json({
      id: jjsfreight.id,
      status: "success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid jjsfreight data");
  }
});

// @desc    finding dropdown on entering customer_name
// @route   GET /api/findcustomer
export const findCustomer = asyncHandler(async (req, res) => {
  // const { text } = req.body;

  // const cutomers = await Customer.find({ customer_name: { $regex: text } });

  let customerList = [];
  const cutomers = await Customer.find();
  for (const customer of cutomers) {
    if (customer.customer_name) customerList.push(customer.customer_name);
  }

  res.status(201).json({
    customerList,
  });
});

// @desc    filling customer form data through customer name
// @route   GET /api/customerdetails
export const customerDetails = asyncHandler(async (req, res) => {
  const { customer_name } = req.body;

  const details = await Customer.findOne({ customer_name });

  res.status(201).json({
    details,
  });
});

// @desc    Get jjsFreight
// @route   GET /api/getjjsfreight
// @access  protect
export const getJJSFreight = asyncHandler(async (req, res) => {
  const jjsfreight = await JJSFreight.find({ approve: true })
    .populate("customer")
    .populate("shipping")
    .populate("vanning")
    .populate("customerpayment")
    .populate("container")
    .populate("checklist");
  console.log(jjsfreight);

  res.status(200).json(jjsfreight);
});

// @desc    Get jjsFreight
// @route   GET /api/getjjsfreightNA
// @access  protect
export const getJJSFreightNA = asyncHandler(async (req, res) => {
  const jjsfreight = await JJSFreight.find({ approve: false })
    .populate("customer")
    .populate("shipping")
    .populate("vanning")
    .populate("customerpayment")
    .populate("container")
    .populate("checklist");
  console.log(jjsfreight);

  res.status(200).json(jjsfreight);
});

// @desc    Update jjsFreight
// @route   PUT /api/updatejjsfreight/:id
// @access  protect
export const updateJJSFreight = asyncHandler(async (req, res) => {
  const { approve } = req.body;
  const jjsfreight = await JJSFreight.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      approve: JSON.parse(approve),
    }
  );
  res.status(200).json(jjsfreight);
});

// @desc    Get PDF of JJS Freight
// @route   GET /api/jjsFreight/:id
// @access  protect
export const pdfJJSFreight = asyncHandler(async (req, res) => {
  const receiptvoucher = await JJSFreight.findById(req.params.id)
    .populate("customer")
    .populate("shipping")
    .populate("vanning")
    .populate("customerpayment")
    .populate("container")
    .populate("checklist");
  const browser = await puppeteer.launch({
    headless: true,
  });

  // create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  // const html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  const html = jjsFreightPdf(receiptvoucher);

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
    path: `${__dirname}/pdf/jjs_freight.pdf`,
  });

  // close the browser
  await browser.close();

  res.download(`${__dirname}/pdf/jjs_freight.pdf`);
});
