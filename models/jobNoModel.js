const mongoose = require("mongoose");

const jobNoSchema = mongoose.Schema({
  job: Number,
});

module.exports = mongoose.model("jobNo", jobNoSchema);
