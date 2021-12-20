const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//routes import
const otpRoutes = require("./routes/otp");

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

const PORT = 8000;

//routes
app.use("/api/otp", otpRoutes);

app.listen(PORT, () => {
  console.log(`BACKEND IS READY ON ${PORT} PORT`);
});
