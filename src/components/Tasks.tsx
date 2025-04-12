import { Task } from "./types";
import TaskList from "./TaskList";
import TaskListSkeleton from "./TaskListSkeleton";
import { sortTasks } from "./utils";
import { FormattedMessage } from "react-intl";

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
    return (
      <div>
        <FormattedMessage
          id="error.loading"
          defaultMessage="There was an error loading todo items, please try again later."
        />
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div>
        <FormattedMessage
          id="empty"
          defaultMessage="You do not have any todo items."
        />
      </div>
    );
  }

  const sortedTasks = sortTasks(tasks);

  return <TaskList tasks={sortedTasks} onComplete={onComplete} />;
}
