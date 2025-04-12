"use client";

import { useEffect, useState } from "react";
import { Task } from "../components/types";
import Tasks from "../components/Tasks";
import UpdateErrorToast from "../components/UpdateErrorToast";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Toast } from "radix-ui";
import messages from "../en.json";

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
  const [patchError, setPatchError] = useState<string | null>(null);

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

  function handleUpdateError(taskId: string) {
    setPatchError(taskId);

    setTimeout(() => {
      setPatchError(null);
    }, 5000);

    setTasks((prevTasks) => {
      return prevTasks.map((t) =>
        t.id === taskId ? { ...t, isComplete: !t.isComplete } : t
      );
    });
  }

  function handleComplete(taskId: string) {
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      return;
    }

    // Optimistically update the task list and we will alert the user if the update fails
    setTasks((prevTasks) => {
      return prevTasks.map((t) =>
        t.id === taskId ? { ...t, isComplete: !t.isComplete } : t
      );
    });

    fetch(process.env.NEXT_PUBLIC_API_URL + "/patch/" + taskId, {
      method: "PATCH",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
      body: JSON.stringify({
        isComplete: !task.isComplete,
      }),
    })
      .then((res) => res.json())
      .then(({ status }) => {
        if (status !== "success") {
          handleUpdateError(taskId);
        }
      })
      .catch((err) => {
        console.error(err);
        handleUpdateError(taskId);
      });
  }

  return (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <Toast.Provider>
        <main className="w-full max-w-xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">
            <FormattedMessage id="title" defaultMessage="Todo App" />
          </h1>

          <Tasks tasks={tasks} status={status} onComplete={handleComplete} />

          <UpdateErrorToast
            open={!!patchError}
            onOpenChange={() => setPatchError(null)}
          />

          <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-4" />
        </main>
      </Toast.Provider>
    </IntlProvider>
  );
}
