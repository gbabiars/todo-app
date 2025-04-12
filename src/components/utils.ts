import { Task } from "./types";

export function combineClasses(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function sortFn(a: Task, b: Task) {
  if (a.dueDate && b.dueDate) {
    return a.dueDate.getTime() - b.dueDate.getTime();
  }
  if (a.dueDate) {
    return -1;
  }
  if (b.dueDate) {
    return 1;
  }
  return 0;
}

export function sortTasks(tasks: Task[]) {
  const tasksByDueDate = tasks.sort(sortFn);

  const completedTasks = tasksByDueDate.filter((task) => task.isComplete);

  const incompleteTasks = tasksByDueDate.filter((task) => !task.isComplete);

  return [...incompleteTasks, ...completedTasks];
}
