const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var addRouter = require("./routes/add");

const app = express();

const port = 3001;

mongoose
  .connect(
    "mongodb+srv://kumbasrikanth8:Srikanth045@cluster0.avho1ie.mongodb.net/"
  )
  .then(() => {
    console.log("connected mongodb");
  })
  .catch(() => {
    console.log("mongo db not connected");
  });
const corsOptions = {
  origin: "http://localhost:3000", // Set the origin dynamically based on your function
  allowedHeaders: ["content-type"],
  methods: ["GET", "PUT", "POST", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/task", addRouter);

app.listen(port, () => {
  console.log(`server list ${port} `);
});
