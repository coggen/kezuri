// Load our Kezuri CSS
import '../dist/kezuri2/kezuri2.css';

// Load our Kezuri Custom Elements
import {defineCustomElements} from '../loader';
defineCustomElements();

// Load our custom Storybook styles
import './preview.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Design Tokens', 'Utilities', 'Atoms', 'Molecules', 'Organisms']
      }
    }
  },
};

export default preview;
