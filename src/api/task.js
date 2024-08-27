import axiosInstance from './axiosConfig';

const API_URL = 'http://localhost:8080/api/tasks';

export const getTasks = async () => {
  try {
    const res = await axiosInstance.get(`${API_URL}`);
    return res
  } catch (err) { }
};

export const createTask = async (task) => {
  try {
    const res = await axiosInstance.post(`${API_URL}`, task);
    alert("Created successfully");
    return res
  } catch (err) {
    alert("Only admin or manager can create the task");
  }
};

export const updateTask = async (id, task) => {
  try {
    const res = await axiosInstance.put(`${API_URL}/${id}`, task);
    alert("Updated successfully");
    return res
  } catch (err) {
    alert("Only admin or manager can update the task");
  }
};

export const deleteTask = async (id) => {
    try {
    const res = await axiosInstance.delete(`${API_URL}/${id}`);
    alert("Deleted successfullly");
    return res
  } catch (err) {
    alert("Only admin can delete the task");
  }
};
