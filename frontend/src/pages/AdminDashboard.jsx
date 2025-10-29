import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../context/AuthContext";

const AdminDashboard = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Ensure we always set an array
      setTasks(Array.isArray(res.data.data) ? res.data.data : []);
      setError(null);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks");
      setTasks([]); // Set empty array on error
    }
  };

  const fetchUsers = async () => {
  try {
    const res = await axios.get("/users/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    // Debug ke liye
    console.log("Users API Response:", res.data);
    
    // Multiple possible structures handle karo
    const usersData = res.data.data || res.data.users || res.data || [];
    setUsers(Array.isArray(usersData) ? usersData : []);
  } catch (err) {
    console.error("Error fetching users:", err);
    console.error("Error response:", err.response?.data);
    setUsers([]);
  }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchTasks(), fetchUsers()]);
      setLoading(false);
    };
    
    if (token) {
      loadData();
    }
  }, [token]);

  const createTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/tasks", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ title: "", description: "", assignedTo: "" });
      fetchTasks();
      alert("Task Created Successfully");
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Failed to create task");
    }
  };

  const deleteTask = async (id) => {
    if (confirm("Are you sure to delete?")) {
      try {
        await axios.delete(`/tasks/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchTasks();
      } catch (err) {
        console.error("Error deleting task:", err);
        alert("Failed to delete task");
      }
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h2>

      {error && (
        <div className="max-w-md mx-auto mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Create Task Form */}
      <form
        onSubmit={createTask}
        className="max-w-md mx-auto bg-gray-100 p-4 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Task Title"
          className="w-full mb-2 p-2 rounded border"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Task Description"
          className="w-full mb-2 p-2 rounded border"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <select
          className="w-full mb-3 p-2 rounded border"
          value={formData.assignedTo}
          onChange={(e) =>
            setFormData({ ...formData, assignedTo: e.target.value })
          }
          required
        >
          <option value="">Select User</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>
              {u.username} ({u.email})
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Create Task
        </button>
      </form>

      {/* Task List */}
      <div className="mt-6 max-w-3xl mx-auto">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded-xl shadow mb-3 border"
            >
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm mt-1 text-gray-600">
                Assigned to: {task.assignedTo?.username || "N/A"}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Status:</span> {task.status}
              </p>
              <button
                onClick={() => deleteTask(task._id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
