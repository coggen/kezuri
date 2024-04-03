import { optional } from '../../utils/utils';

/**
 * A dial-style visual progress indicator, with semantic coloring depending on
 * the progress value.
 *
 * Note: Dials are static images, so the size of the color band is based on the
 * threshold, not on the exact progress value.
 */
export default {
  title: 'Molecules/Progress Dial',
  tags: ['autodocs'],
  argTypes: {
    highThreshold: {
      description: 'The maximum possible value of the progress dial',
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
    description: {
      description: 'Optional description to show below the dial',
    },
  },
  render: args => `
<sharpen-progress-dial progress-val="${args.progressVal}"${optional('description', args.description)}${optional('high-threshold', args.highThreshold)}${optional('low-threshold', args.lowThreshold)}${optional('elevated-threshold', args.elevatedThreshold)}></sharpen-progress-bar>`,
};

/** Including custom thresholds. */
export const AllOptions = {
  args: {
    progressVal: 170,
    description: 'Moderate Risk',
    highThreshold: 200,
    lowThreshold: 75,
    elevatedThreshold: 180,
  },
};

export const ThresholdColors = {
  render: () => `
<div class="row">
  <div class="col-sm"><sharpen-progress-dial progress-val="0"  description="Result Pending"></sharpen-progress-dial></div>
  <div class="col-sm"><sharpen-progress-dial progress-val="10" description="Low Risk"></sharpen-progress-dial></div>
  <div class="col-sm"><sharpen-progress-dial progress-val="50" description="Moderate Risk"></sharpen-progress-dial></div>
  <div class="col-sm"><sharpen-progress-dial progress-val="90" description="High Risk"></sharpen-progress-dial></div>
</div>
`,
};

export const WithDescription = {
  args: {
    description: 'Moderate Risk',
    progressVal: 50,
  },
};

export const OnlyDial = {
  args: {
    progressVal: 50,
  },
};
