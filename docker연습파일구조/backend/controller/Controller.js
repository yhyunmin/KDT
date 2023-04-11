const Todo = require('../models/todo');

// GET /todos - get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.render('todos', { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// POST /todos - create new todo
exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await Todo.create({ title });
    res.redirect('/todos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// DELETE /todos/:id - delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.destroy({ where: { id } });
    res.redirect('/todos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
