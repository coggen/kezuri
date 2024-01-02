/**
 * Quickly manage the layout, alignment, and sizing of grid columns,
 * navigation, components, and more with Bootstrap's full suite of responsive
 * flexbox utilities.
 * 
 * Note: All utility classes have responsive variations, following the first
 * example below.
 */
export default {
  title: 'Utilities/Flex',
  tags: ['autodocs'],
};

/**
 * Apply display utilities to create a flexbox container and transform direct
 * children elements into flex items. Flex containers and items are able to be
 * modified further with additional flex properties.
 * 
 * Responsive variations also exist for `.d-flex` and `.d-inline-flex`.
 *
 * * `.d-flex`
 * * `.d-inline-flex`
 * * `.d-sm-flex`
 * * `.d-sm-inline-flex`
 * * `.d-md-flex`
 * * `.d-md-inline-flex`
 * * `.d-lg-flex`
 * * `.d-lg-inline-flex`
 * * `.d-xl-flex`
 * * `.d-xl-inline-flex`
 * * `.d-xxl-flex`
 * * `.d-xxl-inline-flex`
 *
 */
export const EnableFlexBehaviors = {
  render: () => `<div class="d-flex sharpen-p-sm">I'm a flexbox container!</div>
<div class="d-inline-flex sharpen-p-sm">I'm an inline flexbox container!</div>`
};

/**
 * Set the direction of flex items in a flex container with direction
 * utilities. In most cases you can omit the horizontal class here as the
 * browser default is row. However, you may encounter situations where you
 * needed to explicitly set this value (like responsive layouts).
 *
 * Use `.flex-row` to set a horizontal direction (the browser default), or
 * `.flex-row-reverse` to start the horizontal direction from the opposite
 * side.
 */
export const DirectionRow = {
  name: "Direction: Row",
  render: () => `<div class="d-flex flex-row">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>`
}

/**
 * Use `.flex-column` to set a vertical direction, or `.flex-column-reverse`
 * to start the vertical direction from the opposite side.
 */
export const DirectionColumn = {
  name: "Direction: Column",
  render: () => `<div class="d-flex flex-column">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>`
}

/**
 * Use `justify-content` utilities on flexbox containers to change the alignment
 * of flex items on the main axis (the x-axis to start, y-axis if
 * `flex-direction: column`). Choose from `start` (browser default), `end`,
 * `center`, `between`, `around`, or `evenly`.
 */
export const JustifyContent = {
  render: () => `<div class="d-flex justify-content-start"><div>justify</div><div>content</div><div>start</div></div>
<div class="d-flex justify-content-end"><div>justify</div><div>content</div><div>end</div></div>
<div class="d-flex justify-content-center"><div>justify</div><div>content</div><div>center</div></div>
<div class="d-flex justify-content-between"><div>justify</div><div>content</div><div>between</div></div>
<div class="d-flex justify-content-around"><div>justify</div><div>content</div><div>around</div></div>
<div class="d-flex justify-content-evenly"><div>justify</div><div>content</div><div>evenly</div></div>`
}

/**
 * Use `align-items` utilities on flexbox containers to change the alignment of
 * flex items on the cross axis (the y-axis to start, x-axis if 
 * `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`,
 * or `stretch` (browser default).
 */
export const AlignItems = {
  render: () => `<div class="d-flex align-items-start"><div>item</div><div>item</div><div>item</div></div>
<div class="d-flex align-items-end"><div>item</div><div>item</div><div>item</div></div>
<div class="d-flex align-items-center"><div>item</div><div>item</div><div>item</div></div>
<div class="d-flex align-items-baseline"><div>item</div><div>item</div><div>item</div></div>
<div class="d-flex align-items-stretch"><div>item</div><div>item</div><div>item</div></div>`
}

/**
 * Use `align-self` utilities on flexbox items to individually change their
 * alignment on the cross axis (the y-axis to start, x-axis if 
 * `flex-direction: column`). Choose from the same options as `align-items`:
 * `start`, `end`, `center`, `baseline`, or `stretch` (browser default).
 */
export const AlignSelf = {
  render: () => `<div class="d-flex">
  <div style="height:6rem;">item</div>
  <div class="align-self-start">item</div>
  <div style="height:6rem;">item</div>
</div>
<div class="d-flex">
  <div style="height:6rem;">item</div>
  <div class="align-self-end">item</div>
  <div style="height:6rem;">item</div>
</div>
<div class="d-flex">
  <div style="height:6rem;">item</div>
  <div class="align-self-center">item</div>
  <div style="height:6rem;">item</div>
</div>
<div class="d-flex">
  <div style="height:6rem;">item</div>
  <div class="align-self-baseline">item</div>
  <div style="height:6rem;">item</div>
</div>
<div class="d-flex">
  <div style="height:6rem;">item</div>
  <div class="align-self-stretch">item</div>
  <div style="height:6rem;">item</div>
</div>`
}

/**
 * Use the `.flex-fill` class on a series of sibling elements to force them
 * into widths equal to their content (or equal widths if their content does
 * not surpass their border-boxes) while taking up all available horizontal
 * space.
 */
export const Fill = {
  render: () => `<div class="d-flex">
  <div class="flex-fill">Flex item with a lot of content</div>
  <div class="flex-fill">Flex item</div>
  <div class="flex-fill">Flex item</div>
</div>`
}

/**
 * Use .`flex-grow-*` utilities to toggle a flex item’s ability to grow to
 * fill available space. In the example below, the `.flex-grow-1` elements uses
 * all available space it can, while allowing the remaining two flex items
 * their necessary space.
 */
export const Grow = {
  render: () => `<div class="d-flex">
  <div class="flex-grow-1">Flex item</div>
  <div>Flex item</div>
  <div>Third flex item</div>
</div>` 
}

/**
 * Use `.flex-shrink-*` utilities to toggle a flex item’s ability to shrink
 * if necessary. In the example below, the second flex item with
 * `.flex-shrink-1` is forced to wrap its contents to a new line, “shrinking”
 * to allow more space for the previous flex item with 100% width.
 */
export const Shrink = {
  render: () => `<div class="d-flex">
  <div style="width:100%;">Flex item</div>
  <div class="flex-shrink-1">Flex item</div>
</div>` 
}

/**
 * Change how flex items wrap in a flex container. Choose from no wrapping at
 * all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`,
 * or reverse wrapping with `.flex-wrap-reverse`.
 */
export const Wrap = {
  render: () => `<div class="d-flex flex-nowrap" style="width: 5rem;"><div>Flex item</div><div>Flex item</div><div>Flex item</div></div>
<div class="d-flex flex-wrap"><div>Flex item 0</div><div>Flex item 1</div><div>Flex item 2</div><div>Flex item 3</div><div>Flex item 4</div><div>Flex item 5</div><div>Flex item 6</div><div>Flex item 7</div><div>Flex item 8</div><div>Flex item 9</div><div>Flex item 10</div><div>Flex item 11</div><div>Flex item 12</div><div>Flex item1 13</div><div>Flex item 14</div></div>
<div class="d-flex flex-wrap-reverse"><div>Flex item 0</div><div>Flex item 1</div><div>Flex item 2</div><div>Flex item 3</div><div>Flex item 4</div><div>Flex item 5</div><div>Flex item 6</div><div>Flex item 7</div><div>Flex item 8</div><div>Flex item 9</div><div>Flex item 10</div><div>Flex item 11</div><div>Flex item 12</div><div>Flex item1 13</div><div>Flex item 14</div></div>`
}

/**
 * Use `align-content` utilities on flexbox containers to align flex items
 * together on the cross axis. Choose from `start` (browser default), `end`,
 * `center`, `between`, `around`, or `stretch`. To demonstrate these
 * utilities, we’ve enforced `flex-wrap: wrap` and increased the number of
 * flex items.
 * 
 * Note: This property has no effect on single rows of flex items.
 */
export const AlignContent = {
  render: () => `<div class="d-flex align-content-start flex-wrap"><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div><div>align-content-start</div></div>
<div class="d-flex align-content-end flex-wrap"><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div><div>align-content-end</div></div>
<div class="d-flex align-content-center flex-wrap"><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div><div>align-content-center</div></div>
<div class="d-flex align-content-between flex-wrap"><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div><div>align-content-between</div></div>
<div class="d-flex align-content-around flex-wrap"><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div><div>align-content-around</div></div>
<div class="d-flex align-content-stretch flex-wrap"><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div><div>align-content-stretch</div></div>`
}

