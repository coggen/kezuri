/**
 * Used at the top of a page to give the user a way to navigate one step up
 * a page hierarchy.
 */
export default {
  title: 'Molecules/Back',
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'URL destination'
    },
    linkText: {
      description: 'Text to display'
    }
  },
  args: {
    href: 'https://sharpen.com',
    linkText: 'Back to Dashboard'
  },
  render: (args) => `<sharpen-back href="${args.href}">${args.linkText}</sharpen-back>`
};

/** A back button */
export const Example = { };