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

const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});
const updateTodo = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const todo = await Todo.findById(req.params.id);

  if (todo) {
    todo.title = title;
    todo.content = content;
    todo.category = category;

    const updateTodo = await todo.save();
    res.json(updateTodo);
  } else {
    res.status(404);
    throw new Error("Todo not found");
  }
});
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    await todo.remove();
    res.json({ message: "Todo Removed" });
  } else {
    res.status(404);
    throw new Error("Todo not Found");
  }
});

module.exports = { getTodos, createTodo, getTodoById, updateTodo, deleteTodo };
