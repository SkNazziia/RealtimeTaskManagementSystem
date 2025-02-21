"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const auth = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));

    socket.on("taskUpdate", (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off("taskUpdate");
    };
  }, []);

  const createTask = async () => {
    await axios.post("http://localhost:5000/api/tasks", { title: "New Task" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Task Dashboard</h2>
      <button onClick={createTask} className="mt-2 p-2 bg-blue-500 text-white rounded">Create Task</button>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id} className="p-2 bg-gray-100 mt-2 rounded">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
