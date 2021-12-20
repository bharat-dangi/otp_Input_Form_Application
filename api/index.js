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

const PORT = process.env.PORT || 8000;

//routes
app.use("/api/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO Byls API");
});

app.listen(PORT, () => {
  console.log(`BACKEND IS READY ON ${PORT} PORT`);
});
