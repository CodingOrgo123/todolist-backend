const mongoose = require('mongoose'); 
  
const todoSchema = new mongoose.Schema({ 
    task: { 
        type: String, 
        required: true, 
    }, 
    Description: { 
        type: String, 
        required: true, 
    }, 
    deadline: { 
        type: Date, 
    }, 
    status: { 
        type: String, 
        required: true, 
    },
}); 
  
  
const todoList = mongoose.model("todo", todoSchema); 
  
module.exports = todoList;