/**
 * Kezuri provides a Bootstrap-style grid system
 */
export default {
  title: 'Utilities/Grid',
  tags: ['autodocs'],
};

/**
 * Responsive columns can be defined for the following breakpoints:
 * `sm`, `md`, `lg`, `xl`, `xxl`
 */
export const ResponsiveColumns = {
  render: () => `<div class="row">
  <div class="col-sm-4">
    <div class="example">col-sm-4</div>
  </div>
  <div class="col-sm-4">
    <div class="example">col-sm-4</div>
  </div>
  <div class="col-sm-4">
    <div class="example">col-sm-4</div>
  </div>
</div>`,
};

/**
 * These columns will automatically size themselves to share the given width.
 */
export const AutomaticResponsiveColumns = {
  render: () => `<div class="row">
  <div class="col-sm">
    <div class="example">col-sm</div>
  </div>
  <div class="col-sm">
    <div class="example">col-sm</div>
  </div>
  <div class="col-sm">
    <div class="example">col-sm</div>
  </div>
  <div class="col-sm">
    <div class="example">col-sm</div>
  </div>
  <div class="col-sm">
    <div class="example">col-sm</div>
  </div>
</div>`,
};

/**
 * Shift a column over using offsets. (Classes for automatic responsive columns
 * and all responsive breakpoints.)
 */
export const ColumnOffsets = {
  render: () => `<div class="row">
  <div class="col-2">
    <div class="example">col-2</div>
  </div>
  <div class="offset-1 col-3">
    <div class="example">offset-1 col-3</div>
  </div>
  <div class="offset-2 col-4">
    <div class="example">offset-2 col-4</div>
  </div>
</div>

<div class="row">
  <div class="col-sm-2">
    <div class="example">col-sm-2</div>
  </div>
  <div class="offset-sm-1 col-sm-3">
    <div class="example">offset-sm-1 col-sm-3</div>
  </div>
  <div class="offset-sm-2 col-sm-4">
    <div class="example">offset-sm-2 col-sm-4</div>
  </div>
</div>`,
};

/**
 * Use the responsive `.row-cols-*` classes to quickly set the number of
 * columns that best render your content and layout. Whereas normal `.col-*`
 * classes apply to the individual columns (e.g., `.col-md-4`), the row columns
 * classes are set on the parent `.row` as a shortcut.
 *
 * Use these row columns classes to quickly create basic grid layouts or to
 * control card layouts.
 */
export const RowColumns = {
  render: () => `<div class="row row-cols-3">
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
  <div class="col">
    <sharpen-card border="gray" padding="medium">Card</sharpen-card>
  </div>
</div>`,
};
