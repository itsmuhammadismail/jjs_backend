import mongoose from "mongoose";

const vanningSchema = mongoose.Schema(
  {
    transporter: String,
    location: String,
    contact: String,
    tel: String,
    commodity: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vanning", vanningSchema);
