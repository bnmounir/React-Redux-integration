require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(
  process.env.DB_USER,
  { useNewUrlParser: true }
);
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
