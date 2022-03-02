// @desc    Get job no
// @route   GET /api/jobno

import expressAsyncHandler from "express-async-handler";
import jobNoModel from "../models/jobNoModel.js";

// @access  protect
export const getJobNo = expressAsyncHandler(async (req, res) => {
  const jobNo = await jobNoModel.findOne();

  res.status(200).json({ job_no: jobNo.job });
});
