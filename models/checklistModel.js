const mongoose = require("mongoose");

const checklistModel = mongoose.Schema(
  {
    done_by: String,
    certificate: String,
    weightment: String,
    bill_of_loading: String,
    invoice_type: String,
    invoice_amount: Number,
    packing_list: String,
    certificate_of_origin: String,
    sg: String,
    cash: String,
    ep: String,
    police_paper: String,
    exit_paper: String,
    truck: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Checklist", checklistModel);
