import { Meta, StoryObj } from "@storybook/react";
import TaskListItem from "./TaskListItem";
import { useState } from "react";

const meta: Meta<typeof TaskListItem> = {
  component: TaskListItem,
  title: "Components/TaskListItem",
  argTypes: {
    onComplete: { action: "complete" },
  },
};

export default meta;

type Story = StoryObj<typeof TaskListItem>;

export const Default: Story = {
  args: {
    id: "4",
    description: "Walk the dog",
    dueDate: null,
  },
};

export const Overdue: Story = {
  args: {
    ...Default.args,
    variant: "overdue",
    dueDate: new Date("2025-04-10"),
  },
};

export const Completed: Story = {
  args: {
    ...Default.args,
    variant: "completed",
    dueDate: null,
  },
};

export const Interactive: Story = {
  render: () => {
    const [isComplete, setIsComplete] = useState(false);

    return (
      <TaskListItem
        id="4"
        description="Walk the dog"
        variant={isComplete ? "completed" : "default"}
        onComplete={() => setIsComplete(!isComplete)}
      />
    );
  },
};
