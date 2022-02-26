import mongoose from "mongoose";

const checklistModel = mongoose.Schema(
  {
    done_by: String,
    certificate: String,
    weightment: String,
    bill_of_loading: String,
    invoice_type: String,
    invoice_amount: Number,
    packingList: String,
    certificate: String,
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

export default mongoose.model("Checklist", checklistModel);
