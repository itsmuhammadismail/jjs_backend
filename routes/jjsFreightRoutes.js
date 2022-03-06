import express from "express";
import { jjsFreight } from "../controllers/jjsFreightContoller.js";
import { getJJSFreight } from "../controllers/jjsFreightContoller.js";
import { updateJJSFreight } from "../controllers/jjsFreightContoller.js";
import { findCustomer } from "../controllers/jjsFreightContoller.js";
import { customerDetails } from "../controllers/jjsFreightContoller.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/jjsfreight", protect, jjsFreight);
router.get("/getjjsfreight", protect, getJJSFreight);
router.put("/updatejjsfreight/:id", protect, updateJJSFreight);
router.get("/findcustomer", findCustomer);
router.post("/customerdetails", protect, customerDetails);

export default router;
