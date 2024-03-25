/**
 * A simple, decorative navigation bar with the Sharpen brand mark, which
 * can be optionally linked to a URL.
 */
export default {
  title: 'Organisms/Simple Navigation',
  tags: ['autodocs'],
  argTypes: {
    background: {
      description: 'Background color',
      options: ['sunrise', 'mint'],
      control: 'radio',
    },
    brandHref: {
      description: 'URL that the brand image should link to',
    },
  },
  args: {
    background: 'sunrise',
    brandHref: 'https://sharpen.com',
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => `<sharpen-simple-navigation background="${args.background}" brand-href="${args.brandHref}"></sharpen-simple-navigation>`
};

/**
 * In the storymaker interface, the sunrise (yellow) bar is used for
 * parent/configuration screens.
 */
export const Sunrise = {
  args: {
    background: 'sunrise'
  }
}

/**
 * In the storymaker interface, the mint (green) bar is used for child/reading
 * screens.
 */
export const Mint = {
  args: {
    background: 'mint'
  }
}
