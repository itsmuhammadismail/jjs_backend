const mongoose = require("mongoose");

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

module.exports = mongoose.model("Customer", customerSchema);
