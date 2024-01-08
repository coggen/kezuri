/**
 * Collections make it easier to apply even spacing between elements in a
 * vertical list, e.g. a series of sub-assessments cards within an assessment.
 * Collections just insert a margin between sibling items; simpler than flex
 * utilities, they do not change the elements' display setting.
 */
export default {
  title: 'Utilities/Collections',
  tags: ['autodocs'],
};

export const SmallSpacing = {
  render: () => `
<div class="sharpen-collection-sm">
  <sharpen-card padding="small" border="gray">Card in a small collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a small collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a small collection</sharpen-card>
</div>
`
};

export const MediumSpacing = {
  render: () => `
<div class="sharpen-collection-md">
  <sharpen-card padding="small" border="gray">Card in a medium collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a medium collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a medium collection</sharpen-card>
</div>
`
};

export const LargeSpacing = {
  render: () => `
<div class="sharpen-collection-lg">
  <sharpen-card padding="small" border="gray">Card in a large collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a large collection</sharpen-card>
  <sharpen-card padding="small" border="gray">Card in a large collection</sharpen-card>
</div>
`
};
