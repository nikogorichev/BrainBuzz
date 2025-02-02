import { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: { children: "Link" },
};

export const Secondary: Story = {
  args: { children: "Link", theme: "secondary" },
};

export const PrimaryDark: Story = {
  args: { children: "Link" },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
  args: { children: "Link", theme: "secondary" },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
