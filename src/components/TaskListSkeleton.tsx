import { useEffect, useState } from "react";

function TaskListSkeletonItem({ isAnimating }: { isAnimating: boolean }) {
  return (
    <div
      className={`h-[38px] bg-gray-200 ${isAnimating ? "animate-pulse" : ""}`}
    />
  );
}

function TaskListSkeleton() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[11px]" role="status">
      <TaskListSkeletonItem isAnimating={isAnimating} />
      <TaskListSkeletonItem isAnimating={isAnimating} />
      <TaskListSkeletonItem isAnimating={isAnimating} />
    </div>
  );
}

export default TaskListSkeleton;
