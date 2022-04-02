const express = require("express");
const {
  addInvoice,
  pdfInvoice,
} = require("../controllers/addInvoiceContoller.js");
const {
  getInvoice,
  getInvoiceNA,
} = require("../controllers/addInvoiceContoller.js");
const { updateInvoice } = require("../controllers/addInvoiceContoller.js");
const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.post("/addinvoice", protect, addInvoice);
router.get("/getinvoice", protect, getInvoice);
router.get("/getinvoiceNA", protect, getInvoiceNA);
router.get("/pdfInvoice/:id", pdfInvoice);
router.put("/updateinvoice/:id", protect, updateInvoice);

module.exports = router
