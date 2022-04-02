const mongoose = require("mongoose");

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

module.exports = mongoose.model("Container", containerModel);
