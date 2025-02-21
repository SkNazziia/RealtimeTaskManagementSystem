export default function TaskList() {
    const tasks = [
      { id: 1, title: "Fix deployment issue", status: "Pending" },
      { id: 2, title: "Implement AI suggestions", status: "In Progress" },
    ];
  
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="p-2 border-b">
              {task.title} - <span className="text-gray-500">{task.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  