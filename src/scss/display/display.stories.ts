/**
 * Quickly and responsively toggle the display value of components and more
 * with Bootstrap-based display utilities. Includes support for some of the more common
 * values, as well as some extras for controlling display when printing.
 * 
 * Display utility classes that apply to all breakpoints, from `xs` to `xxl`,
 * have no breakpoint abbreviation in them. This is because those classes are
 * applied from `min-width: 0;` and up, and thus are not bound by a media
 * query. The remaining breakpoints, however, do include a breakpoint
 * abbreviation.
 * 
 * As such, the classes are named using the format:
 * 
 * * `.d-{value}` for `xs`
 * * `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.
 * 
 * Where value is one of:
 * 
 * * `none`
 * * `inline`
 * * `inline-block`
 * * `block`
 * * `grid`
 * * `inline-grid`
 * * `table`
 * * `table-cell`
 * * `table-row`
 * * `flex`
 * * `inline-flex`
 * 
 * The media queries affect screen widths with the given breakpoint or larger.
 * For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, and `xxl` screens.
 */
export default {
  title: 'Utilities/Display',
  tags: ['autodocs'],
};

export const Inline = {
  render: () => `<div class="d-inline sharpen-p-sm" style="background-color: lightblue;">d-inline</div>
<div class="d-inline sharpen-p-sm" style="background-color: lightgreen;">d-inline</div>`
};

export const Block = {
  render: () => `<span class="d-block sharpen-p-sm" style="background-color: lightblue;">d-block</span>
<span class="d-block sharpen-p-sm" style="background-color: lightgreen;">d-block</span>`
};

/**
 * For faster mobile-friendly development, use responsive display classes for
 * showing and hiding elements by device. Avoid creating entirely different
 * versions of the same page, instead hide elements responsively for each
 * screen size.
 * 
 * To hide elements simply use the `.d-none` class or one of the
 * `.d-{sm,md,lg,xl,xxl}-none` classes for any responsive screen variation.
 * 
 * To show an element only on a given interval of screen sizes you can combine
 * one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-xl-none .d-xxl-none`
 * will hide the element for all screen sizes except on medium and large
 * devices.
 */
export const HidingElements = {
  render: () => `<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>`
}

/**
 * Change the display value of elements when printing with print display
 * utility classes. The print and display classes can be combined.
 */
export const PrintDisplay = {
  render: () => `<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>`
}