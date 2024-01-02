import { optional } from '../../utils/utils';

/**
 * When a user logs into Sharpen, we use a grid of **profile cards** to show
 * them what learners exist in their account so they can select the learner
 * they want to view or work with.
 */
export default {
  title: 'Molecules/Profile Card',
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: "The profile's first and last name.",
    },
    initial: {
      description: "The profile's first initial",
    },
    buttonText: {
      description: "The text to display on the card's primary button.",
      table: { defaultValue: { summary: 'Select' } }
    },
    url: {
      description: "Where we send the user when they click the primary button."
    },
    color: {
      description: "The color of the initial.",
      control: { type: 'color' },
      table: { defaultValue: { summary: 'var(--color-sky)' } }
    },
    backgroundColor: {
      description: "The background color of the circle.",
      control: { type: 'color' },
      table: { defaultValue: { summary: '#0f3e88' } }
    },
  },
  render: (args) => `<sharpen-profile-card name="${args.name}" initial="${args.initial}" button-text="${args.buttonText}" url="${args.url}"${optional('color', args.color)}${optional('background-color', args.backgroundColor)}></sharpen-profile-card>`
};

export const Default = {
  args: {
    name: 'Jurickson Profar',
    initial: 'J',
    buttonText: 'Select',
    url: 'https://sharpen.com'
  }
};