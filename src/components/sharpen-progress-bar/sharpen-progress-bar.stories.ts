import { optional } from '../../utils/utils';

/**
 * A visual progress indicator, with semantic coloring depending on the
 * progress value.
 */
export default {
  title: 'Molecules/Progress Bar',
  tags: ['autodocs'],
  argTypes: {
    highThreshold: {
      description: 'The maximum possible value of the progress bar',
      table: { defaultValue: { summary: 100 } },
    },
    lowThreshold: {
      description: 'The value under which the progress bar will display "low" styling. Default is computed to be 33% of the highThreshold.',
    },
    elevatedThreshold: {
      description: 'The value under which the progress bar will display "elevated" styling. Default is computed to be 66% of the highThreshold.',
    },
    progressVal: {
      description: 'The current progress value',
      table: { defaultValue: { summary: 0 } },
    },
    showDescription: {
      description: 'Whether or not to display the status description',
    },
    statusLabel: {
      description: 'An optional label to append after the computed threshold name',
    },
    size: {
      description: 'How wide the progress bar should be. Default is narrow.',
      options: ['', 'wide', 'wider'],
      control: 'select',
    },
  },
  render: args => `
<sharpen-progress-bar progress-val="${args.progressVal}"${optional('size', args.size)}${optional('show-description', args.showDescription)}${optional('status-label', args.statusLabel)}${optional('high-threshold', args.highThreshold)}${optional('low-threshold', args.lowThreshold)}${optional('elevated-threshold', args.elevatedThreshold)}></sharpen-progress-bar>`,
};

export const CustomThresholds = {
  args: {
    progressVal: 170,
    showDescription: true,
    statusLabel: 'Risk',
    highThreshold: 200,
    lowThreshold: 75,
    elevatedThreshold: 180,
    size: null,
  },
};

export const ThresholdColors = {
  render: () => `
<sharpen-progress-bar progress-val="10" show-description="true"></sharpen-progress-bar>
<sharpen-progress-bar progress-val="50" show-description="true"></sharpen-progress-bar>
<sharpen-progress-bar progress-val="90" show-description="true"></sharpen-progress-bar>
`,
};

export const WithDescriptionAndLabel = {
  args: {
    showDescription: true,
    statusLabel: 'Risk',
    progressVal: 50,
  },
};

export const WithDescription = {
  args: {
    showDescription: true,
    progressVal: 50,
  },
};

export const OnlyBar = {
  args: {
    progressVal: 50,
  },
};

export const WideVariant = {
  args: {
    size: 'wide',
    progressVal: 50,
  },
};


export const WiderVariant = {
  args: {
    size: 'wider',
    progressVal: 50,
  },
};