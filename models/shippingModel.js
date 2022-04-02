const mongoose = require("mongoose");

const shippingSchema = mongoose.Schema(
  {
    shipping_fee: String,
    ets: String,
    eta: String,
    pol: String,
    pods: String,
    volume: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shipping", shippingSchema);
