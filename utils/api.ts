const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"; // Backend URL
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY; // OpenAI API Key

// ✅ Fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  return response.json();
};

// ✅ Create a new task
export const createTask = async (taskData: { title: string; description: string }) => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

// ✅ User Login
export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

// ✅ AI-Powered Task Suggestions (OpenAI API)
export const getAITaskSuggestion = async (prompt: string) => {
  if (!OPENAI_API_KEY) {
    throw new Error("Missing OpenAI API Key!");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4", // Ensure you use a valid OpenAI model
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch AI suggestions");
  }

  return response.json();
};
