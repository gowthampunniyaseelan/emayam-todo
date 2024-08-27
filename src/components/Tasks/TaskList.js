import React from 'react';
import "../Tasks/TaskList.css"
function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      <h3>Your Tasks</h3>
      <ul>
        {tasks && tasks.data && tasks.data.length > 0 ? tasks.data.map((task) => (
          <li key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        )) : ""}
      </ul>
    </div>
  );
}

export default TaskList;
