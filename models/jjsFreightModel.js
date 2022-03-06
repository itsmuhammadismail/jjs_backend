import mongoose from "mongoose";

const jjsFreightSchema = mongoose.Schema(
  {
    receipt_date: Date,
    bill_of_loading: String,
    job_no: String,
    invoice_no: [String],
    sales_person: String,
    approve: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    shipping: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Shipping",
    },
    vanning: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vanning",
    },
    customerpayment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "CustomerPayment",
    },
    container: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Container",
    },
    checklist: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Checklist",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("JJSFreight", jjsFreightSchema);
