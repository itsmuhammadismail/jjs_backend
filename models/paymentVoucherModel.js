import mongoose from "mongoose";

const paymentVoucherSchema = mongoose.Schema(
  {
    receipt_date: Date,
    cash_cheque_no: String,
    amount: String,
    bank: String,
    the_sum_of: String,
    paid_to: String,
    being: String,
    customer: String,
    accountant: String,

    //Approve
    approve: {
      type: Boolean,
      default: false,
    },

    //foreign key for user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    //foreign key for jjsfreight
    jjsfreight: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "JJSFreight",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PaymentVoucher", paymentVoucherSchema);
