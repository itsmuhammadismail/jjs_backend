import mongoose from "mongoose";

const containerModel = mongoose.Schema(
  {
    container_detail: String,
    ed_no: String,
    declaration: String,
    amount: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Container", containerModel);
