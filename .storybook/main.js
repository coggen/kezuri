/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../dist/kezuri']
};
export default config;
