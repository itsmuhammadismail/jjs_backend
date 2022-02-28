import asyncHandler from "express-async-handler";
import JJSFreight from "../models/jjsFreightModel.js";
import Customer from "../models/customerModel.js";
import Shipping from "../models/shippingModel.js";
import Vanning from "../models/vanningModel.js";
import CustomerPayment from "../models/customerModel.js";
import Container from "../models/containerModel.js";
import Checklist from "../models/checklistModel.js";

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

  const customer = await Customer.create({
    customer_name: customer_name,
    contact_person: contact_person,
    tel: tel,
    mob: mob,
    email: email,
  });

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
  });

  // Create jjsfreight
  const jjsfreight = await JJSFreight.create({
    receipt_date,
    bill_of_loading,
    job_no,
    invoice_no,
    sales_person,
    user: req.user._id,
    customer: customer._id,
    shipping: shipping._id,
    vanning: vanning._id,
    customerPayment: customerpayment._id,
    container: container._id,
    checklist: checklist._id,
  });

  if (jjsfreight) {
    res.status(201).json({
      id: jjsfreight.id,
      status: "success",
    });
  } else {
    res.status(400);
    throw new Error("Invalid jjsfreight data");
  }
});
