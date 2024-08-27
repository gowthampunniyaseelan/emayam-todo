import React from 'react';
import "../Tasks/TaskItem.css"
function TaskItem({ task }) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </li>
  );
}

export default TaskItem;
