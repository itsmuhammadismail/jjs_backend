const mongoose = require("mongoose");

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

module.exports = mongoose.model("Vanning", vanningSchema);
