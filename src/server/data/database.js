/* eslint-disable max-classes-per-file */

class Todo extends Object { }
class User extends Object { }

// Mock authenticated ID.
const VIEWER_ID = 'me';

// Mock user data.
const viewer = new User();
viewer.id = VIEWER_ID;
const usersById = {
  [VIEWER_ID]: viewer,
};

const todosById = {};
const todoIdsByUser = {
  [VIEWER_ID]: [],
};
let nextTodoId = 0;

function addTodo(text, complete) {
  const todo = new Todo();
  Object.assign(todo, {
    id: `${nextTodoId++}`,
    complete: Boolean(complete),
    text,
  });

  todosById[todo.id] = todo;
  todoIdsByUser[VIEWER_ID].push(todo.id);

  return todo.id;
}

// Mock todo data.
addTodo('Taste JavaScript', true);
addTodo('Buy a unicorn', false);

function getTodo(id) {
  return todosById[id];
}

function changeTodoStatus(id, complete) {
  const todo = getTodo(id);
  todo.complete = complete;
}

function getTodos(status = 'any') {
  const todos = todoIdsByUser[VIEWER_ID].map((id) => todosById[id]);
  if (status === 'any') {
    return todos;
  }

  return todos.filter((todo) => todo.complete === (status === 'completed'));
}

function getUser() {
  return usersById[VIEWER_ID];
}

function getViewer() {
  return getUser(VIEWER_ID);
}

function markAllTodos(complete) {
  const changedTodos = [];
  getTodos().forEach((todo) => {
    if (todo.complete !== complete) {
      /* eslint-disable no-param-reassign */
      todo.complete = complete;
      /* eslint-enable no-param-reassign */
      changedTodos.push(todo);
    }
  });
  return changedTodos.map((todo) => todo.id);
}

function removeTodo(id) {
  const todoIndex = todoIdsByUser[VIEWER_ID].indexOf(id);
  if (todoIndex !== -1) {
    todoIdsByUser[VIEWER_ID].splice(todoIndex, 1);
  }
  delete todosById[id];
}

function removeCompletedTodos() {
  const todosToRemove = getTodos().filter((todo) => todo.complete);
  todosToRemove.forEach((todo) => removeTodo(todo.id));
  return todosToRemove.map((todo) => todo.id);
}

function renameTodo(id, text) {
  const todo = getTodo(id);
  todo.text = text;
}

module.exports = { Todo, User, addTodo, getTodo, changeTodoStatus, getTodos, getUser, getViewer, markAllTodos, removeTodo, removeCompletedTodos, renameTodo };
