const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  timeReq: {
    type: Number,
   
  },
  
});

const todoList = mongoose.model("todoList", todoSchema);

module.exports = todoList;