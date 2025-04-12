import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import "./styles.css";
import { IntlProvider } from "react-intl";
import messages from "../src/en.json";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <Story />
    </IntlProvider>
  ),
];

export default preview;
