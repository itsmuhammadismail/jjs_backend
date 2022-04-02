// @desc    Get job no
// @route   GET /api/jobno

const expressAsyncHandler = require("express-async-handler");
const jobNoModel = require("../models/jobNoModel.js");

// @access  protect
const getJobNo = expressAsyncHandler(async (req, res) => {
  const jobNo = await jobNoModel.findOne();

  res.status(200).json({ job_no: jobNo.job });
});

module.exports = {
  getJobNo,
};
