const express = require("express");
const todomodal = require("../model/todo");
const addRouter = express.Router();

addRouter.post("/add", async (req, res) => {
  const task = req.body;
  todomodal
    .create({
      task: task.task,
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
});

addRouter.get("/", async (req, res) => {
  todomodal
    .find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(200).json(err));
});
addRouter.delete("/", async (req, res) => {
  const { id } = req.query;
  todomodal
    .findByIdAndDelete(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(200).json(err));
});
module.exports = addRouter;
