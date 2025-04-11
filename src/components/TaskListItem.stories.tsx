import { Meta, StoryObj } from "@storybook/react";
import TaskListItem from "./TaskListItem";

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
    isComplete: false,
    dueDate: null,
  },
};
