const mongoose = require("mongoose");

const receiptVoucherSchema = mongoose.Schema(
  {
    receipt_date: Date,
    cash_cheque_no: String,
    amount: String,
    bank: String,
    the_sum_of: String,
    recieved_from: String,
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

module.exports = mongoose.model("ReceiptVoucher", receiptVoucherSchema);
