import { Meta, StoryObj } from "@storybook/react";
import UpdateErrorToast from "./UpdateErrorToast";
import { Toast } from "radix-ui";
import React from "react";

const decorator = (Story: any) => (
  <Toast.Provider>
    <Story />

    <Toast.Viewport className="fixed bottom-0 right-0 z-50 m-4" />
  </Toast.Provider>
);

const meta: Meta<typeof UpdateErrorToast> = {
  title: "Components/UpdateErrorToast",
  component: UpdateErrorToast,
  decorators: [decorator],
  parameters: {
    a11y: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof UpdateErrorToast>;

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
};
