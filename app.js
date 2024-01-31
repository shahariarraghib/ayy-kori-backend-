const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const rateLimitMiddleware = require("./middlewares/rateLimit");
// thard party middleWare
app.use(cors());
app.use(express.json());
app.use(rateLimitMiddleware);
// route
const userRoute = require("./Routes/userLogInfo.route");
const prductRoute = require("./Routes/product.route");

app.use("/user", userRoute);
app.use("/product", prductRoute);

app.get("/", (req, res) => {
  res.send("Ayy kori surver is connected!!");
});

module.exports = app;
