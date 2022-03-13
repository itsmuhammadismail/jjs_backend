import mongoose from "mongoose";

const customerPaymentSchema = mongoose.Schema(
  {
    costed: String,
    invoiced: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CustomerPayment", customerPaymentSchema);
