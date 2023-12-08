/**
 * A button component that contains a text-based call to action
 *
 * Used as button or link that can handle all actions.
 *
 * NOTE: **The sharpen-button doesn't have any styles applied to it. We can apply different classes to the button.**
 */
export default {
  title: 'Atoms/Sharpen Button',
  tags: ['autodocs'],
  argTypes: {
    method: {
      description: 'Action method',
      options: ['post', 'put', 'patch', 'get'],
      control: 'radio',
      table: { defaultValue: { summary: 'get' } }
    },
    text: {
      description: 'Text to display',
      control: 'text'
    },
    authToken: {
      description: 'Required for POST requests',
      control: 'none'
    },
    destination: {
      description: 'target to open the link in new or the same tab',
      options: ['self', '_blank'],
      control: 'radio',
      table: { defaultValue: { summary: 'self' } }
    },
    path: {
      description: 'URL destination',
      control: 'text'
    }
  },
  args: {
    destination: 'self',
    path: 'https://sharpen.com',
    method: 'put',
    text: 'Take Assessment',
  },
  render: (args) => `<sharpen-button path="${args.path}" destination="${args.destination}" method="${args.method}" class="${args.class}" text="${args.text}"></sharpen-button>`
};

export const Link = {
  args: {
    path: 'https://google.com',
    method: 'get',
    text: 'Take Assessment',
    class: 'sharpen-button sharpen-button--link sharpen-button--small'
  }
}
