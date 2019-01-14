import React from 'react';

export default function Todo({ task, removeTodo }) {
  return (
    <li>
      {task} <button onClick={removeTodo}>X</button>
    </li>
  );
}
