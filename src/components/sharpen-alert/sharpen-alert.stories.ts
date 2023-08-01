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
      table: { defaultValue: { summary: 'none' } }
    },
    icon: {
      description: 'Optional icon to display.'
    },
    heading: {
      description: 'Optional heading text.'
    },
  },
  render: (args) => `<sharpen-alert type="${args.type}"${args.icon ? ' icon="' + args.icon + '"' : ''}${args.heading ? ' heading="' + args.heading + '"' : ''}>${args.message ?? ''}</sharpen-alert>`
};

/** An success alert */
export const Success = {
  args: {
    type: 'success',
    icon: 'done',
    heading: 'A success alert',
    message: 'In which we describe something good that happened.',
  }
};

/** An warning alert */
export const Warning = {
  args: {
    type: 'warning',
    icon: 'warning',
    heading: 'A warning alert',
    message: 'In which we warn the user about something risky.',
  }
};

/** An warning alert */
export const Danger = {
  args: {
    type: 'danger',
    icon: 'error',
    heading: 'A danger alert',
    message: 'In which we describe something bad that happened.',
  }
};

/** A heading-only alert */
export const HeadingOnly = {
  args: {
    type: 'success',
    icon: 'error',
    heading: 'This alert is just a one-liner'
  }
};

/** An alert with only a heading and message */
export const NoIcon = {
  args: {
    type: 'success',
    heading: 'Yikes, no icon!',
    message: 'But this renders just fine.',
  }
};

/** An alert with only a heading and message */
export const MessageOnly = {
  args: {
    type: 'success',
    message: 'Just a simple alert with a message.',
  }
};

/** The message block can contain any kind of HTML. */
export const DetailedMessage = {
  args: {
    type: 'success',
    heading: 'Read these important details',
    message: `<p>Choose from these flavors:</p>
    <ul>
      <li>Chocolate</li>
      <li>Banana</li>
      <li>Mint Oreo</li>
    </ul>`
  }
};