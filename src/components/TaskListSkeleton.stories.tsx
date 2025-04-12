import { Meta, StoryObj } from "@storybook/react";
import TaskListSkeleton from "./TaskListSkeleton";

const meta: Meta<typeof TaskListSkeleton> = {
  component: TaskListSkeleton,
};

export default meta;

type Story = StoryObj<typeof TaskListSkeleton>;

export const Default: Story = {};
