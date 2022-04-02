const mongoose = require("mongoose");

const customerPaymentSchema = mongoose.Schema(
  {
    costed: String,
    invoiced: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomerPayment", customerPaymentSchema);
