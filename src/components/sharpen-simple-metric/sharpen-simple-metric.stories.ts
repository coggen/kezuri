/**
 * A bit of structure for displaying a metric visualization
 * next to some supplementary content.
 */
export default {
  title: 'Molecules/Simple Metric',
  tags: ['autodocs'],
  render: () => `<sharpen-simple-metric class="sharpen-mb-md">
  <sharpen-progress-circle slot="metric" progress-val="33" progress-label="33%"></sharpen-progress-circle>
  <div slot="content">
    <div class="sharpen-text-lg">Level A &rsaquo; Unit 2</div>
    <div>3 / 10 lessons completed</div>
  </div>
</sharpen-simple-metric>

<sharpen-simple-metric>
  <div slot="metric" class="sharpen-text--center sharpen-text-4xl sharpen-text--color-pine">2.2</div>
  <div slot="content">
    <strong>Average weekly lessons completed</strong>
  </div>
</sharpen-simple-metric>`,
};

export const Example = {};

// export const Example = {
//   args: {
//     progressVal: 33,
//     progressLabel: '33%'
//   },
// };
