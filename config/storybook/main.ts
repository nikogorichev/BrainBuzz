import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: {
            exportType: "default",
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: "**/*.svg",
        }),
      ],
      resolve: {
        alias: {
          "@src": path.resolve(__dirname, "../../src"),
          app: path.resolve(__dirname, "../../src/app"),
          entities: path.resolve(__dirname, "../../src/entities"),
          features: path.resolve(__dirname, "../../src/features"),
          pages: path.resolve(__dirname, "../../src/pages"),
          shared: path.resolve(__dirname, "../../src/shared"),
          widgets: path.resolve(__dirname, "../../src/widgets"),
        },
      },
    });
  },
};
export default config;
