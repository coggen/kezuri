/**
 * A **card** is a flexible and extensible content container.
 */
export default {
  title: 'Atoms/Card',
  tags: ['autodocs'],
  argTypes: {
    border: {
      description: 'A card may or may not have a border. If unbordered, the card will have subtle background shading.',
      options: ['none', 'gray'],
      control: 'radio',
      table: { defaultValue: { summary: 'none' } }
    },
    padding: {
      description: 'Padding is customizable. A complementary bottom margin will by applied based on your padding size.',
      options: ['none', 'small', 'medium', 'large'],
      control: 'radio',
      table: { defaultValue: { summary: 'small' } }
    },
  },
  args: {
    border: 'gray',
    padding: 'small'
  },
  render: (args) => `<sharpen-card border="${args.border}" padding="${args.padding}">This is my card</sharpen-card>`
};

/** A bordered card */
export const Bordered = {
  args: {
    border: 'gray'
  }
};

/** An unbordered card */
export const Unbordered = {
  args: {
    border: 'none'
  }
};