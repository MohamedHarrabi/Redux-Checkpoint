import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm  />
      <Todo/>
    </>
  );
}

export default TodoList;
