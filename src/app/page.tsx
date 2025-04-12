"use client";

import { useEffect, useState } from "react";
import { Task } from "../components/types";
import Tasks from "../components/Tasks";

function normalizeTasks(tasks: Task[]) {
  return tasks.map((task) => ({
    ...task,
    dueDate: task.dueDate ? new Date(task.dueDate) : null,
  }));
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );

  useEffect(() => {
    setStatus("loading");
    fetch(process.env.NEXT_PUBLIC_API_URL + "/get", {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(normalizeTasks(data));
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  return (
    <main className="w-full max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <Tasks tasks={tasks} status={status} onComplete={() => {}} />
    </main>
  );
}
