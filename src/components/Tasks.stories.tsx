import { Meta, StoryObj } from "@storybook/react";
import Tasks from "./Tasks";

const meta: Meta<typeof Tasks> = {
  title: "Components/Tasks",
  component: Tasks,
};

export default meta;

type Story = StoryObj<typeof Tasks>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: "1",
        description: "File 2023 Taxes",
        isComplete: true,
        dueDate: new Date("2023-03-10T17:50:44.673Z"),
      },
      {
        id: "2",
        description: "Fold laundry",
        isComplete: true,
        dueDate: null,
      },
      {
        id: "3",
        description: "Call Mom",
        isComplete: false,
        dueDate: new Date("2023-06-26T19:00:00.000Z"),
      },
      {
        id: "4",
        description: "Walk the dog",
        isComplete: false,
        dueDate: null,
      },
      {
        id: "5",
        description: "Feed the cat",
        isComplete: false,
        dueDate: new Date("2025-12-24T15:45:00.000Z"),
      },
      {
        id: "6",
        description: "Run LA marathon",
        isComplete: false,
        dueDate: new Date("2023-03-21T13:30:00.000Z"),
      },
    ],
    status: "success",
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
    status: "success",
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    status: "loading",
  },
};

export const Error: Story = {
  args: {
    tasks: [],
    status: "error",
  },
};
