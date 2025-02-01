import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Text" },
};

export const Secondary: Story = {
    args: { children: "Text", theme: "secondary" },
  };

export const Clear: Story = {
  args: { children: "Text", theme: "clear" },
};

Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
  args: {
    children: "Text",
    disabled: true
  },
};
