const express = require("express");
const mongoose = require("mongoose");
const route= require("../src/routes/route");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb://0.0.0.0:27017/server",
    {
      UseNewUrlParser: true,
    }
  )

  .then(() => console.log("mongoDB is  connected"))
  .catch((err) => console.log(err));
// app.use(cors());
app.use("/", route);


app.listen(process.env.PORT || 5000, function () {
  console.log("server app listening on port " + (process.env.PORT || 5000));
});
