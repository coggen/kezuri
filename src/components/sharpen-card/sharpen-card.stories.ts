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
      description: 'Padding is customizable.',
      options: ['none', 'small', 'medium', 'large'],
      control: 'radio',
      table: { defaultValue: { summary: 'none' } }
    },
  },
  args: {
    border: 'gray',
    padding: 'medium'
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

/**
 * A bold green header, used primarily to show major assessment names. Designed
 * to fit within a border-none, padding-none `sharpen-card`. Pair with
 * `sharpen-card-content` so that the content has the desired padding.
 */
export const CardHeader = {
  args: { padding: 'large' },
  render: (args) => `<sharpen-card border="none" padding="none">
  <sharpen-card-header>Family History Assessment</sharpen-card-header>
  <sharpen-card-content padding="${args.padding}">
    Content here
  </sharpen-card-content>
</sharpen-card>`
};