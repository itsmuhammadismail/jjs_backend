const asyncHandler = require("express-async-handler");
const AddInvoice = require("../models/addInvoiceModel.js");
const JJSFreight = require("../models/jjsFreightModel.js");
const Customer = require("../models/customerModel.js");
const puppeteer = require("puppeteer");
const invoiePdf = require("./pdf/invoivePdf.js");



// @desc    Add new add invoice
// @route   POST /api/addinvoice
// @access  Protect

const addInvoice = asyncHandler(async (req, res) => {
  const {
    cost_dhs_airsea,
    invoice_dhs_airsea,
    cost_dhs_shifting,
    invoice_dhs_shifting,
    cost_dhs_demurrage,
    invoice_dhs_demurrage,
    cost_dhs_transport,
    invoice_dhs_transport,
    cost_dhs_blcharges,
    invoice_dhs_blcharges,
    cost_dhs_export,
    invoice_dhs_export,
    cost_dhs_documentation,
    invoice_dhs_documentation,
    cost_dhs_imcocharges,
    invoice_dhs_imcocharges,
    cost_dhs_inspection,
    invoice_dhs_inspection,
    cost_dhs_agentcom,
    invoice_dhs_agentcom,
    cost_dhs_gatepass,
    invoice_dhs_gatepass,
    cost_dhs_warehouse,
    invoice_dhs_warehouse,
    cost_dhs_deciration,
    invoice_dhs_deciration,
    cost_dhs_billentry,
    invoice_dhs_billentry,
    cost_dhs_customduty,
    invoice_dhs_customduty,
    cost_dhs_customdeposit,
    invoice_dhs_customdeposit,
    cost_dhs_servicecharges,
    invoice_dhs_servicecharges,
    cost_dhs_certification,
    invoice_dhs_certification,
    cost_dhs_housecharge,
    invoice_dhs_housecharge,
    cost_dhs_truckwaiting,
    invoice_dhs_truckwaiting,
    cost_dhs_diverpass,
    invoice_dhs_diverpass,
    cost_dhs_truckpass,
    invoice_dhs_truckpass,
    cost_dhs_crosstuffing,
    invoice_dhs_crosstuffing,
    cost_dhs_manifest,
    invoice_dhs_manifest,
    cost_dhs_cfscharge,
    invoice_dhs_cfscharge,
    cost_dhs_dpc,
    invoice_dhs_dpc,
    cost_dhs_dpa,
    invoice_dhs_dpa,
    cost_dhs_deliveryorder,
    invoice_dhs_deliveryorder,
    cost_dhs_thc,
    invoice_dhs_thc,
    cost_dhs_ispc,
    invoice_dhs_ispc,
    cost_dhs_priority,
    invoice_dhs_priority,
    cost_dhs_seal,
    invoice_dhs_seal,
    cost_dhs_customerseal,
    invoice_dhs_customerseal,
    cost_dhs_affording,
    invoice_dhs_affording,
    cost_dhs_stamp,
    invoice_dhs_stamp,
    cost_dhs_shipout,
    invoice_dhs_shipout,
    cost_dhs_finalstamp,
    invoice_dhs_finalstamp,
    cost_dhs_amendment,
    invoice_dhs_amendment,
    cost_dhs_overtime,
    invoice_dhs_overtime,
    cost_dhs_fuel,
    invoice_dhs_fuel,
    cost_dhs_warehousestorage,
    invoice_dhs_warehousestorage,
    cost_dhs_portstorage,
    invoice_dhs_portstorage,
    cost_dhs_mcostorage,
    invoice_dhs_mcostorage,
    cost_dhs_imcohandling,
    invoice_dhs_imcohandling,
    cost_dhs_miscelaneous,
    invoice_dhs_miscelaneous,
    cost_dhs_stickers,
    invoice_dhs_stickers,
    cost_dhs_lashing,
    invoice_dhs_lashing,
    cost_dhs_vehicle,
    invoice_dhs_vehicle,
    cost_dhs_carge,
    invoice_dhs_carge,
    cost_dhs_warehousecharges,
    invoice_dhs_warehousecharge,
    cost_dhs_stacking,
    invoice_dhs_stacking,
    cost_dhs_repairing,
    invoice_dhs_repairing,
    cost_dhs_general,
    invoice_dhs_general,
    cost_dhs_manualdeposite,
    invoice_dhs_manualdeposite,
    cost_dhs_fumigation,
    invoice_dhs_fumigation,
    cost_dhs_others,
    invoice_dhs_others,
    cost_dhs_surrenderfee,
    invoice_dhs_surrenderfee,
    cost_dhs_taxi,
    invoice_dhs_taxi,
    cost_dhs_bus,
    invoice_dhs_bus,
    cost_dhs_containerstuffing,
    invoice_dhs_containerstuffing,
    cost_dhs_containeroffloading,
    invoice_dhs_containeroffloading,
    cost_dhs_damagescharge,
    invoice_dhs_damagescharge,
    cost_dhs_paryialoffloading,
    invoice_dhs_paryialoffloading,
    job_no,
    customer_name,
  } = req.body;

  const jjs = await JJSFreight.findOne({ job_no });
  var jjs_id;
  if (jjs) {
    jjs_id = jjs.id;
  } else {
    res.status(400);
    throw new Error("JJSFreight ID not found");
  }

  const customer = await Customer.findOne({ customer_name });

  // Create add invoice
  const addinvoice = await AddInvoice.create({
    cost_dhs_airsea,
    invoice_dhs_airsea,
    cost_dhs_shifting,
    invoice_dhs_shifting,
    cost_dhs_demurrage,
    invoice_dhs_demurrage,
    cost_dhs_transport,
    invoice_dhs_transport,
    cost_dhs_blcharges,
    invoice_dhs_blcharges,
    cost_dhs_export,
    invoice_dhs_export,
    cost_dhs_documentation,
    invoice_dhs_documentation,
    cost_dhs_imcocharges,
    invoice_dhs_imcocharges,
    cost_dhs_inspection,
    invoice_dhs_inspection,
    cost_dhs_agentcom,
    invoice_dhs_agentcom,
    cost_dhs_gatepass,
    invoice_dhs_gatepass,
    cost_dhs_warehouse,
    invoice_dhs_warehouse,
    cost_dhs_deciration,
    invoice_dhs_deciration,
    cost_dhs_billentry,
    invoice_dhs_billentry,
    cost_dhs_customduty,
    invoice_dhs_customduty,
    cost_dhs_customdeposit,
    invoice_dhs_customdeposit,
    cost_dhs_servicecharges,
    invoice_dhs_servicecharges,
    cost_dhs_certification,
    invoice_dhs_certification,
    cost_dhs_housecharge,
    invoice_dhs_housecharge,
    cost_dhs_truckwaiting,
    invoice_dhs_truckwaiting,
    cost_dhs_diverpass,
    invoice_dhs_diverpass,
    cost_dhs_truckpass,
    invoice_dhs_truckpass,
    cost_dhs_crosstuffing,
    invoice_dhs_crosstuffing,
    cost_dhs_manifest,
    invoice_dhs_manifest,
    cost_dhs_cfscharge,
    invoice_dhs_cfscharge,
    cost_dhs_dpc,
    invoice_dhs_dpc,
    cost_dhs_dpa,
    invoice_dhs_dpa,
    cost_dhs_deliveryorder,
    invoice_dhs_deliveryorder,
    cost_dhs_thc,
    invoice_dhs_thc,
    cost_dhs_ispc,
    invoice_dhs_ispc,
    cost_dhs_priority,
    invoice_dhs_priority,
    cost_dhs_seal,
    invoice_dhs_seal,
    cost_dhs_customerseal,
    invoice_dhs_customerseal,
    cost_dhs_affording,
    invoice_dhs_affording,
    cost_dhs_stamp,
    invoice_dhs_stamp,
    cost_dhs_shipout,
    invoice_dhs_shipout,
    cost_dhs_finalstamp,
    invoice_dhs_finalstamp,
    cost_dhs_amendment,
    invoice_dhs_amendment,
    cost_dhs_overtime,
    invoice_dhs_overtime,
    cost_dhs_fuel,
    invoice_dhs_fuel,
    cost_dhs_warehousestorage,
    invoice_dhs_warehousestorage,
    cost_dhs_portstorage,
    invoice_dhs_portstorage,
    cost_dhs_mcostorage,
    invoice_dhs_mcostorage,
    cost_dhs_imcohandling,
    invoice_dhs_imcohandling,
    cost_dhs_miscelaneous,
    invoice_dhs_miscelaneous,
    cost_dhs_stickers,
    invoice_dhs_stickers,
    cost_dhs_lashing,
    invoice_dhs_lashing,
    cost_dhs_vehicle,
    invoice_dhs_vehicle,
    cost_dhs_carge,
    invoice_dhs_carge,
    cost_dhs_warehousecharges,
    invoice_dhs_warehousecharge,
    cost_dhs_stacking,
    invoice_dhs_stacking,
    cost_dhs_repairing,
    invoice_dhs_repairing,
    cost_dhs_general,
    invoice_dhs_general,
    cost_dhs_manualdeposite,
    invoice_dhs_manualdeposite,
    cost_dhs_fumigation,
    invoice_dhs_fumigation,
    cost_dhs_others,
    invoice_dhs_others,
    cost_dhs_surrenderfee,
    invoice_dhs_surrenderfee,
    cost_dhs_taxi,
    invoice_dhs_taxi,
    cost_dhs_bus,
    invoice_dhs_bus,
    cost_dhs_containerstuffing,
    invoice_dhs_containerstuffing,
    cost_dhs_containeroffloading,
    invoice_dhs_containeroffloading,
    cost_dhs_damagescharge,
    invoice_dhs_damagescharge,
    cost_dhs_paryialoffloading,
    invoice_dhs_paryialoffloading,
    user: req.user._id,
    jjsfreight: jjs_id,
    customer: customer._id,
  });

  if (addinvoice) {
    res.status(201).json({
      _id: addinvoice.id,
      status: "success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid add invoice data");
  }
});

// @desc    Get Invoices
// @route   GET /api/getinvoice
// @access  protect
const getInvoice = asyncHandler(async (req, res) => {
  const invoices = await AddInvoice.find({ approve: true }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(invoices);
});

// @desc    Get Invoices
// @route   GET /api/getinvoiceNA
// @access  protect
const getInvoiceNA = asyncHandler(async (req, res) => {
  const invoices = await AddInvoice.find({ approve: false }).populate(
    "jjsfreight",
    "job_no"
  );

  res.status(200).json(invoices);
});

// @desc    Update Invoices
// @route   PUT /api/updateinvoice/:id
// @access  protect
const updateInvoice = asyncHandler(async (req, res) => {
  const { approve } = req.body;
  const invoice = await AddInvoice.findByIdAndUpdate(req.params.id, req.body, {
    approve: JSON.parse(approve),
  });
  res.status(200).json(invoice);
});

// @desc    Get PDF of JJS Freight
// @route   GET /api/jjsFreight/:id
// @access  protect
const pdfInvoice = asyncHandler(async (req, res) => {
  const invoice = await AddInvoice.findById(req.params.id).populate(
    "jjsfreight",
    "job_no"
  );
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // create a new page
  const page = await browser.newPage();

  // set your html as the pages content
  // const html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  const html = invoiePdf(invoice);

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
    path: `${__dirname}/pdf/invoice.pdf`,
  });

  // close the browser
  await browser.close();

  res.download(`${__dirname}/pdf/invoice.pdf`);
});

module.exports = {
  addInvoice,
  getInvoice,
  getInvoiceNA,
  updateInvoice,
  pdfInvoice,
};
