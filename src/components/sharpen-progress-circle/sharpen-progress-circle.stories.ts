/**
 * A circular progress indicator, with label inside the circle.
 */
export default {
  title: 'Molecules/Progress Circle',
  tags: ['autodocs'],
  argTypes: {
    progressVal: {
      description: 'The current progress value (0–100)'
    },
    progressLabel: {
      description: 'The label to display inside the circle'
    },
  },
  render: (args) => `
<sharpen-progress-circle progress-val="${args.progressVal}" progress-label="${args.progressLabel}"></sharpen-progress-circle>`
};

export const Example = {
  args: {
    progressVal: 33,
    progressLabel: '33%'
  },
};