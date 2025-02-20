import type { StorybookConfig } from "./node_modules/@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "./node_modules/@storybook/addon-onboarding",
    "./node_modules/@storybook/addon-essentials",
    "./node_modules/@chromatic-com/storybook",
    "./node_modules/@storybook/addon-interactions",
  ],
  framework: {
    name: "./node_modules/@storybook/react-vite",
    options: {},
  },
};
export default config;
