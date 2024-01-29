/**
 * Sharpen uses Google's Material Symbols as its icon set. Find icons
 * at https://fonts.google.com/icons
 */
export default {
  title: 'Utilities/Icon',
  argTypes: {
    icon: {
      control: 'text'
    },
  },
  render: (args) => `<i class="sharpen-icon">${args.icon}</i>`,
};

/** By deafult, icons are 24px square. */
export const Example = {
  args: {
    icon: 'arrow_right_alt' 
  }
};

/**
 * Sharpen Icons have an outline style by default. Use the `filled` class to
 * display the icon in the filled variant.
 */
export const FilledIcons = {
  render: () => `
<i class="sharpen-icon">bookmark</i>
<i class="sharpen-icon filled">bookmark</i>
`
}

/**
 * An icon will automatically adopt the color of its container's text.
 */
export const IconColors = {
  args: {
    icon: 'arrow_left_alt' 
  },
  render: (args) => `
    <button class="sharpen-button sharpen-button--primary sharpen-button--small">
  <i class="sharpen-icon">${args.icon}</i> Go left
</button>
<button class="sharpen-button sharpen-button--secondary sharpen-button--small">
  <i class="sharpen-icon">${args.icon}</i> Go left
</button>
<button class="sharpen-button sharpen-button--muted sharpen-button--small">
  <i class="sharpen-icon">${args.icon}</i> Go left
</button>
  `
};