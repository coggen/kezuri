import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

// Load our Kezuri CSS
import '../dist/kezuri/kezuri.css';

// Load our Kezuri Custom Elements
import {defineCustomElements} from '../loader';
defineCustomElements();

// Load our custom Storybook styles
import './preview.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      canvas: {
        sourceState: 'shown',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Welcome', 'Design Tokens', 'Utilities', 'Atoms', 'Molecules', 'Organisms']
      }
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS
      }
    }
  },
};

export default preview;
