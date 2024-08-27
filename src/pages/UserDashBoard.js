import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../api/task';
import '../pages/UserDashBoard.css'; 

function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleCreate = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const handleUpdate = async (task) => {
    await updateTask(currentTask.id,task);
    setCurrentTask(null);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  return (
    <div>
      <Navbar />
      <h2>User Dashboard</h2>
      <TaskForm onSubmit={currentTask ? handleUpdate : handleCreate} task={currentTask} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default UserDashboard;
