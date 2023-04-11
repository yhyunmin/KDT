const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.render('tasks', { tasks });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Add task
router.post('/', async (req, res) => {
  const { title } = req.body;

  try {
    const task = await Task.create({
      title,
    });
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
