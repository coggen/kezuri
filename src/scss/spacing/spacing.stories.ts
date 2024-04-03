/**
 * Assign margin or padding values to an element or a subset of its sides with
 * shorthand classes. Includes support for individual properties, all
 * properties, and vertical and horizontal properties.
 *
 * The classes are named using the format `sharpen-{property}{sides}-{size}`.
 *
 * Property is one of:
 *
 * - `m` for margin
 * - `p` for padding
 *
 * Sides is one of:
 *
 * - `t` for top
 * - `b` for bottom
 * - `l` for left
 * - `r` for right
 * - `x` for left and right
 * - `y` for top and bottom
 * - blank for all four sides
 *
 * Size is one of:
 *
 * - `0` for none
 * - `xs`
 * - `sm`
 * - `md`
 * - `lg`
 * - `xl`
 */
export default {
  title: 'Utilities/Spacing',
  tags: ['autodocs'],
};

export const Margin = {
  render: () => `
<div class="spacing-examples">
  <div class="sharpen-mt-lg">Large top margin</div>
  <div class="sharpen-mr-lg">Large right margin</div>
  <div class="sharpen-mb-lg">Large bottom margin</div>
  <div class="sharpen-ml-lg">Large left margin</div>
  <div class="sharpen-mx-lg">Large left and right margins</div>
  <div class="sharpen-my-lg">Large top and bottom margins</div>
</div>
`,
};

export const Padding = {
  render: () => `
<div class="spacing-examples">
  <div class="sharpen-pt-lg">Large top padding</div>
  <div class="sharpen-pr-lg">Large right padding</div>
  <div class="sharpen-pb-lg">Large bottom padding</div>
  <div class="sharpen-pl-lg">Large left padding</div>
  <div class="sharpen-px-lg">Large left and right padding</div>
  <div class="sharpen-py-lg">Large top and bottom padding</div>
</div>
`,
};

export const Sizes = {
  render: () => `
<div class="spacing-examples">
  <div class="sharpen-mb-xs">xs</div>
  <div class="sharpen-mb-sm">sm</div>
  <div class="sharpen-mb-md">md</div>
  <div class="sharpen-mb-lg">lg</div>
  <div class="sharpen-mb-xl">xl</div>
  <div class="sharpen-mb-0">0</div>
</div>
`,
};
