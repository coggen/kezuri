/**
 * Used at the top of a page to help the user navigate one step up
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

export const Example = { };