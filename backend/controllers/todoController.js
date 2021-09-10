const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

const createTodo = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the fields");
    return;
  } else {
    const todo = new Todo({ title, content, category });

    const createTodo = await todo.save();

    res.status(201).json(createTodo);
  }
});

module.exports = { getTodos, createTodo };
