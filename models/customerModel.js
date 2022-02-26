import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    customer_name: {
      type: String,
      // required: [true, "Please add customer name"],
    },
    contact_person: {
      type: String,
      // required: [true, "Please add contact person"],
    },
    tel: String,
    mob: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);
