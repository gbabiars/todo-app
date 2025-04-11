import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

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
        <Checkbox.Root
          aria-labelledby={`task-${id}`}
          checked={variant === "completed"}
          onCheckedChange={onComplete}
          className="group flex items-center justify-center h-3 w-3 rounded-xs border border-black active:bg-black data-[state=checked]:bg-black transition-all"
        >
          <Checkbox.Indicator>
            <CheckIcon className="h-3 w-3 text-white group-active:opacity-0 transition-all" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p
          id={`task-${id}`}
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
