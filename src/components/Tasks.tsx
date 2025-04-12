import { Task } from "./types";
import TaskList from "./TaskList";
import TaskListSkeleton from "./TaskListSkeleton";
import { sortTasks } from "./utils";

interface TasksProps {
  tasks: Task[];
  status: "loading" | "error" | "success";
  onComplete: (taskId: string) => void;
}

export default function Tasks({ tasks, status, onComplete }: TasksProps) {
  if (status === "loading") {
    return <TaskListSkeleton />;
  }
  if (status === "error") {
    return <div>There was an error loading tasks, please try again later.</div>;
  }

  if (tasks.length === 0) {
    return <div>You do not have any tasks.</div>;
  }

  const sortedTasks = sortTasks(tasks);

  return <TaskList tasks={sortedTasks} onComplete={onComplete} />;
}
