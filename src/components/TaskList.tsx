import TaskListItem from "./TaskListItem";
import { Task } from "./types";

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
}

function getTaskVariant(task: Task) {
  if (task.isComplete) {
    return "completed";
  }

  if (task.dueDate && task.dueDate < new Date()) {
    return "overdue";
  }

  return "default";
}

export default function TaskList({ tasks, onComplete }: TaskListProps) {
  return (
    <div className="flex flex-col gap-[11px]">
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          id={task.id}
          description={task.description}
          dueDate={task.dueDate}
          isComplete={task.isComplete}
          variant={getTaskVariant(task)}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </div>
  );
}
