import express from "express";
import {
  jjsFreight,
  getJJSFreight,
  updateJJSFreight,
  findCustomer,
  getJJSFreightNA,
  customerDetails,
  pdfJJSFreight
} from "../controllers/jjsFreightContoller.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/jjsfreight", protect, jjsFreight);
router.get("/getjjsfreight", protect, getJJSFreight);
router.get("/getjjsfreightNA", protect, getJJSFreightNA);
router.get("/pdfJjsFreight/:id", pdfJJSFreight);
router.put("/updatejjsfreight/:id", protect, updateJJSFreight);
router.get("/findcustomer", findCustomer);
router.post("/customerdetails", protect, customerDetails);

export default router;
