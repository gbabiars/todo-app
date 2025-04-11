import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

interface TaskListItemProps {
  id: string;
  description: string;
  isComplete?: boolean;
  dueDate?: Date | null;
  onComplete: () => void;
}

function TaskListItem({
  id,
  description,
  isComplete = false,
  dueDate = null,
  onComplete,
}: TaskListItemProps) {
  return (
    <div className="flex items-center justify-between bg-neutral py-[5px] px-3">
      <div className="flex items-center gap-3">
        <Checkbox.Root
          aria-labelledby={`task-${id}`}
          checked={isComplete}
          onCheckedChange={onComplete}
          className="group flex items-center justify-center h-3 w-3 rounded-xs border border-black active:bg-black data-[state=checked]:bg-black transition-all"
        >
          <Checkbox.Indicator>
            <CheckIcon className="h-3 w-3 text-white group-active:opacity-0 transition-all" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p id={`task-${id}`} className="text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TaskListItem;
