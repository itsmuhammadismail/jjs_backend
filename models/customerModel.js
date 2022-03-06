import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    customer_name: String,
    contact_person: String,
    tel: String,
    mob: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);
