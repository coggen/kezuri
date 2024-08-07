/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/welcome.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {
      title: 'Kezuri'
    },
  },
  docs: {},
  staticDirs: ['../dist/kezuri']
};
export default config;
