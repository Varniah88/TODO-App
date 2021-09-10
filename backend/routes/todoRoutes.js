const express = require("express");
const {
  getTodos,
  CreateTodo,
  createTodo,
} = require("../controllers/todoController");
const router = express.Router();

//to get all todos
router.route("/").get(getTodos);

//to create todo
router.route("/create").post(createTodo);

//to update and remove todo
router.route("/:id").get().put().delete();

module.exports = router;
