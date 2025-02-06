import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  parameters: {
    loki: {
      skip: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
  },
};

export const Error: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    theme: "error",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Заголовок",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Обычный текст",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    theme: "error",
  },
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    size: "size_s",
  },
};

export const SizeM: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    size: "size_m",
  },
};

export const SizeL: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    size: "size_l",
  },
};

export const TextAlignCenter: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    align: "center",
  },
};

export const TextAlignRight: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    align: "right",
  },
};
