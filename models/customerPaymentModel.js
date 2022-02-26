import mongoose from "mongoose";

const customerPaymentSchema = mongoose.Schema(
  {
    costed: Number,
    invoiced: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CustomerPayment", customerPaymentSchema);
