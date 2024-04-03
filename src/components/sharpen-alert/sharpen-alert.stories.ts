/**
 * An **alert** shows the user an important message.
 */
export default {
  title: 'Molecules/Alert',
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Each type of alert has a unique color.',
      options: ['success', 'warning', 'danger'],
      control: 'radio',
      table: { defaultValue: { summary: 'none' } },
    },
    icon: {
      description: 'Optional icon to display.',
    },
    heading: {
      description: 'Optional heading text.',
    },
  },
  render: args =>
    `<sharpen-alert type="${args.type}"${args.icon ? ' icon="' + args.icon + '"' : ''}${args.heading ? ' heading="' + args.heading + '"' : ''}>${args.message ?? ''}</sharpen-alert>`,
};

/** An success alert */
export const Example = {
  args: {
    type: 'success',
    icon: 'done',
    heading: 'A success alert',
    message: 'In which we describe something good that happened.',
  },
};

/**
 * Alerts support three colors, represented by three types: `warning`
 * (yellow), `success` (green), and `danger` (red).
 */
export const Colors = {
  render: () => `
<sharpen-alert type="warning" icon="info">Warning appears in yellow</sharpen-alert>
<sharpen-alert type="success" icon="info">Success appears in green</sharpen-alert>
<sharpen-alert type="danger" icon="info">Danger appears in red</sharpen-alert>
`,
};

/**
 * An alert can be displayed with any icon from our icon set, or none at all.
 */
export const Icons = {
  render: () => `
<sharpen-alert type="warning" icon="local_pizza">You're low on pizza</sharpen-alert>
<sharpen-alert type="warning" icon="lunch_dining">You're low on burgers</sharpen-alert>
<sharpen-alert type="warning" icon="icecream">You're low on ice cream</sharpen-alert>
<sharpen-alert type="warning">Maybe time for a walk?</sharpen-alert>
`,
};

/**
 * Alerts can be displayed with only a heading, only a message, or both. The
 * message can contain HTML (within reason).
 */
export const HeadingsAndMessages = {
  render: () => `
<sharpen-alert type="success" heading="You purchased ice cream!">Fun times ahead.</sharpen-alert>
<sharpen-alert type="success" heading="Ice cream purchase successful"></sharpen-alert>
<sharpen-alert type="success">Congrats, your ice cream is delicious.</sharpen-alert>
<sharpen-alert type="success" heading="Choose from these flavors">
  <ul class="sharpen-list sharpen-mt-sm">
    <li>Chocolate</li>
    <li>Banana</li>
    <li>Mint Oreo</li>
  </ul>
</sharpen-alert>
`,
};
