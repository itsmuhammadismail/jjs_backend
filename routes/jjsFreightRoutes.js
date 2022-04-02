const express = require("express");
const {
  jjsFreight,
  getJJSFreight,
  updateJJSFreight,
  findCustomer,
  getJJSFreightNA,
  customerDetails,
  pdfJJSFreight,
} = require("../controllers/jjsFreightContoller.js");

const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.post("/jjsfreight", protect, jjsFreight);
router.get("/getjjsfreight", protect, getJJSFreight);
router.get("/getjjsfreightNA", protect, getJJSFreightNA);
router.get("/pdfJjsFreight/:id", pdfJJSFreight);
router.put("/updatejjsfreight/:id", protect, updateJJSFreight);
router.get("/findcustomer", findCustomer);
router.post("/customerdetails", protect, customerDetails);

module.exports = router
