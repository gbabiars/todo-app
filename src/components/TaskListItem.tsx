import TaskCheckbox from "./TaskCheckbox";
function combineClasses(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface TaskListItemProps {
  id: string;
  description: string;
  isComplete?: boolean;
  dueDate?: Date | null;
  variant?: "default" | "overdue" | "completed";
  onComplete: () => void;
}

function TaskListItem({
  id,
  description,
  dueDate = null,
  variant = "default",
  onComplete,
}: TaskListItemProps) {
  const taskId = `task-${id}`;

  return (
    <div
      className={combineClasses(
        "flex items-center justify-between py-[5px] px-3",
        variant === "default" ? "bg-neutral" : "",
        variant === "overdue" ? "bg-danger" : "",
        variant === "completed" ? "bg-success" : ""
      )}
    >
      <div className="flex items-center gap-3">
        <TaskCheckbox
          ariaLabelledby={taskId}
          checked={variant === "completed"}
          onCheckedChange={onComplete}
        />
        <p
          id={taskId}
          className={combineClasses(
            "text-lg",
            variant === "completed" ? "line-through" : ""
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default TaskListItem;
