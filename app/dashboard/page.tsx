"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import io from "socket.io-client";
import axios from "axios";

const SOCKET_SERVER_URL = "http://localhost:5000"; // Update if deployed
const API_URL = "http://localhost:5000/api/tasks";

export default function Dashboard() {
  const auth = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Connect to WebSocket server
    const socket = io(SOCKET_SERVER_URL);

    // Fetch initial task list
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();

    // Listen for real-time task updates
    socket.on("taskUpdate", (updatedTasks) => {
      setTasks(updatedTasks);
    });

    // Cleanup function to avoid memory leaks
    return () => {
      socket.off("taskUpdate");
      socket.disconnect();
    };
  }, []);

  const createTask = async () => {
    try {
      await axios.post(API_URL, { title: "New Task" });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Task Dashboard</h2>
      
      <button
        onClick={createTask}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Create Task
      </button>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task: any) => (
              <li key={task.id} className="p-2 border-b">
                {task.title}
              </li>
            ))
          ) : (
            <p>No tasks available.</p>
          )}
        </ul>
      )}
    </div>
  );
}
