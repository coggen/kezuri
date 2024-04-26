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
    layout: 'fullscreen',
  },
  render: args => `<sharpen-simple-navigation background="${args.background}" brand-href="${args.brandHref}"></sharpen-simple-navigation>`,
};

/**
 * In the storymaker interface, the sunrise (yellow) bar is used for
 * parent/configuration screens.
 */
export const Sunrise = {
  name: "Color: Sunrise",
  args: {
    background: 'sunrise',
  },
};

/**
 * In the storymaker interface, the mint (green) bar is used for child/reading
 * screens.
 */
export const Mint = {
  name: "Color: Mint",
  args: {
    background: 'mint',
  },
};

/**
 * If we need to display a basic link or button, we can use the `custom-nav`
 * slot.
 */
export const CustomNavigation = {
  render: args => `<sharpen-simple-navigation background="${args.background}" brand-href="${args.brandHref}">
  <div slot="custom-nav">
    <button class="sharpen-link">Log In</button>
  </div>
</sharpen-simple-navigation>`
};

/**
 * When no `brand-href` attribute is set, and the `custom-nav` slot is empty, the
 * component renders as a compact decoration.
 */
export const Empty = {
  render: args => `<sharpen-simple-navigation background="${args.background}"></sharpen-simple-navigation>`
};
