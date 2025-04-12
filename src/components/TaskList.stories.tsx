import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: "Components/TaskList",
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: "1",
        description: "Call Mom",
        dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        isComplete: false,
      },
      {
        id: "2",
        description: "Feed the cat",
        dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        isComplete: false,
      },
      {
        id: "3",
        description: "Run LA marathon",
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // a month from now
        isComplete: false,
      },
      {
        id: "4",
        description: "Walk the dog",
        isComplete: false,
      },
      {
        id: "5",
        description: "File taxes",
        dueDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        isComplete: true,
      },
      {
        id: "6",
        description: "Fold laundry",
        isComplete: true,
      },
    ],
  },
};
