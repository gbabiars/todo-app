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
    <div className="flex items-center justify-between bg-neutral py-2.5 px-4">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={isComplete} onChange={onComplete} />
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default TaskListItem;
