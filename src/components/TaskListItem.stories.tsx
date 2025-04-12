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

export const DefaultWithDueDate: Story = {
  args: {
    ...Default.args,
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
};

export const Overdue: Story = {
  args: {
    ...Default.args,
    variant: "overdue",
    dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
};

export const Completed: Story = {
  args: {
    ...Default.args,
    variant: "completed",
    dueDate: null,
  },
};

export const CompletedWithDueDate: Story = {
  args: {
    ...Completed.args,
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
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
