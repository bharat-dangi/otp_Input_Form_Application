const express = require("express");
const { otpVerification } = require("../controllers/otp");

const router = express.Router();

router.post("/verification", otpVerification);

module.exports = router;
