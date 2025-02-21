"use client";

import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY });
const openai = new OpenAIApi(config);

export default function TaskAI() {
  const [task, setTask] = useState("");

  const getTaskSuggestion = async () => {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: "Suggest a task for a software project.",
      max_tokens: 50,
    });

    setTask(response.data.choices[0].text.trim());
  };

  return (
    <div className="mt-4">
      <button onClick={getTaskSuggestion} className="p-2 bg-green-500 text-white rounded">Get AI Task Suggestion</button>
      <p className="mt-2">{task}</p>
    </div>
  );
}
