import mongoose from "mongoose";

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

export default mongoose.model("Shipping", shippingSchema);
