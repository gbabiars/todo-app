import TaskCheckbox from "./TaskCheckbox";
import { combineClasses } from "./utils";

interface TaskListItemProps {
  id: string;
  description: string;
  isComplete?: boolean;
  dueDate?: Date | null;
  variant?: "default" | "overdue" | "completed";
  onComplete: () => void;
  role?: "listitem";
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

function TaskListItem({
  id,
  description,
  dueDate = null,
  variant = "default",
  onComplete,
  role,
}: TaskListItemProps) {
  const taskId = `task-${id}`;

  return (
    <div
      role={role}
      className={combineClasses(
        "flex items-center justify-between py-[5px] ps-3 pe-2 gap-3",
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

      {dueDate && (
        <p className="text-lg px-2 border -my-px">
          {dateFormatter.format(dueDate)}
        </p>
      )}
    </div>
  );
}

export default TaskListItem;
