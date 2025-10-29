import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../context/AuthContext";

const Dashboard = () => {
  const { user, token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get("/tasks");
      
      console.log("Tasks Response:", res.data); // Debug ke liye
      
      // Ensure we always set an array
      const tasksData = res.data.data;
      setTasks(Array.isArray(tasksData) ? tasksData : []);
      setError(null);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      console.error("Error response:", err.response?.data);
      setError("Failed to load tasks");
      setTasks([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`/tasks/${id}`, { status: newStatus });
      fetchTasks();
      alert("Task status updated!");
    } catch (err) {
      console.error("Error updating task:", err);
      alert("Failed to update task status");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading tasks...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">User Dashboard</h2>
      
      {error && (
        <div className="max-w-3xl mx-auto mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks assigned yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-gray-100 p-4 rounded-xl mb-3 shadow"
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="mt-2">
                <span className="font-semibold">Status:</span> {task.status}
              </p>

              <div className="mt-3 flex gap-3">
                {task.status !== "in-progress" && (
                  <button
                    onClick={() => updateStatus(task._id, "in-progress")}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Start
                  </button>
                )}
                {task.status !== "completed" && (
                  <button
                    onClick={() => updateStatus(task._id, "completed")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;