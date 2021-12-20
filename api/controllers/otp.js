exports.otpVerification = async (req, res) => {
  const otpValues = req.body;
  console.log(otpValues);
  var key,
    count = 0;
  for (key in otpValues) {
    if (otpValues[key].length > 0) count++;
  }

  try {
    if (count == 6 && otpValues[6] != 7) {
      return res.status(200).json({
        message: "Success",
      });
    } else {
      return res.status(500).json({ error: "Error" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
