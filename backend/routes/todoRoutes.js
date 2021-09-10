const express = require("express");
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

//to get all todos
router.route("/").get(getTodos);

//to create todo
router.route("/create").post(createTodo);

//to update and remove todo
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);

module.exports = router;
