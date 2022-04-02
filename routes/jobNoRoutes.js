const express = require("express");
const { getJobNo } = require("../controllers/jobNoController.js");

const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.get("/jobno", getJobNo);

module.exports = router