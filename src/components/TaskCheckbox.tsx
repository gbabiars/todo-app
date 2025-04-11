import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

interface TaskCheckboxProps {
  ariaLabelledby: string;
  checked: boolean;
  onCheckedChange: () => void;
}

function TaskCheckbox({
  ariaLabelledby,
  checked,
  onCheckedChange,
}: TaskCheckboxProps) {
  return (
    <Checkbox.Root
      aria-labelledby={ariaLabelledby}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="group flex items-center justify-center h-3 w-3 rounded-xs border border-black active:bg-black data-[state=checked]:bg-black transition-all"
    >
      <Checkbox.Indicator>
        <CheckIcon className="h-3 w-3 text-white group-active:opacity-0 transition-all" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

export default TaskCheckbox;
