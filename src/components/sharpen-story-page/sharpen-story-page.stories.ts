/**
 * A **story page** displays a single sentence (or short paragraph) as part
 * of a storymaker story. Text is paired with a background and optional
 * character image.
 *
 * - Background images should be approximately 1000 pixels wide by 650 pixels
 * high, and have a transparent background that blends with the page (above
 * and below).
 * - Character images should be approximately 800 pixels square and transparent
 * all around so it can be placed on top of a background image.
 *
 * For the layout to display images properly, story pages are intended to be
 * rendered in a mobile-sized portrait ratio.
 */
export default {
  title: 'Organisms/Story Page',
  tags: ['autodocs'],
  argTypes: {
    backgroundSrc: {
      description: 'URL to background image',
    },
    characterSrc: {
      description: 'Optional URL to character image',
    },
    contentMode: {
      description: 'Sentence mode is for earlier readers; paragraph mode is for Grades 3+',
      options: ['sentence', 'paragraph'],
      control: 'radio',
    },
  },
  args: {
    contentMode: 'sentence',
    backgroundSrc: 'https://placehold.co/1000x650?text=Background',
    characterSrc: 'https://placehold.co/800/orange/white?text=Character',
    content: 'Sam the fox sat on a log.',
  },
  render: args => `<sharpen-story-page content-mode="${args.contentMode}" background-src="${args.backgroundSrc}" character-src="${args.characterSrc}">
  ${args.content}
</sharpen-story-page>`,
};

/**
 * In the storymaker interface, the sunrise (yellow) bar is used for
 * parent/configuration screens.
 */
export const Sentence = {
  args: {},
};

/**
 * In the storymaker interface, the sunrise (yellow) bar is used for
 * parent/configuration screens.
 */
export const Paragraph = {
  args: {
    content:
      'As if the waves had been fullers, this craft was bleached like the skeleton of a stranded walrus. All down her sides, this spectral appearance was traced with long channels of reddened rust, while all her spars and her rigging were like the thick branches of trees furred over with hoar-frost.',
    contentMode: 'paragraph',
    characterSrc: '',
  },
};
