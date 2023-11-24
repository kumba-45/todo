const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: String,
});

const todomodal = mongoose.model("todo", todoSchema);

module.exports = todomodal;
