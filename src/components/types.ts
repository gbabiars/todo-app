export type Task = {
  id: string;
  description: string;
  dueDate?: Date | null;
  isComplete?: boolean;
};
