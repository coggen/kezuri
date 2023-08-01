/**
 * Kezuri provides a Bootstrap-style grid system
 */
export default {
  title: 'Utilities/Grid',
  tags: ['autodocs'],
};

/**
 * Responsive columns can be defined for the following breakpoints:
 * sm, md, lg, xl, xxl
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
</div>`
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
</div>`
};

// /**
//  * Kezuri provides a Bootstrap-style grid system
//  */
// const meta: Meta = {
//   title: 'Utilities/Grid',
//   component: 'Grid',
//   tags: ['autodocs']
// };

// export default meta;

// /**
//  * Responsive columns can be defined for the following breakpoints:
//  * sm, md, lg, xl, xxl
//  */
// export const ResponsiveColumns: StoryObj = {
//   name: 'Responsive Columns',
//   render: (args) => html`<div class="row">
//   <div class="col-sm-4">
//     <div class="example">col-sm-4</div>
//   </div>
//   <div class="col-sm-4">
//     <div class="example">col-sm-4</div>
//   </div>
//   <div class="col-sm-4">
//     <div class="example">col-sm-4</div>
//   </div>
// </div>`
// }

// /**
//  * These columns will automatically size themselves to share the given width.
//  */
// export const AutomaticResponsiveColumns: StoryObj = {
//   name: 'Automatic Responsive Columns',
//   render: (args) => html`<div class="row">
//   <div class="col-sm">
//     <div class="example">col-sm</div>
//   </div>
//   <div class="col-sm">
//     <div class="example">col-sm</div>
//   </div>
//   <div class="col-sm">
//     <div class="example">col-sm</div>
//   </div>
//   <div class="col-sm">
//     <div class="example">col-sm</div>
//   </div>
//   <div class="col-sm">
//     <div class="example">col-sm</div>
//   </div>
// </div>`
// }