/**
 * A pagination component indicates a series of related content exists across
 * multiple pages.
 * 
 * We use a large block of connected links for our pagination, making links
 * hard to miss, easily scalable, and providing large click areas. Pagination
 * is built with list HTML elements so screen readers can announce the number
 * of available links.
 * 
 * Use a wrapping `<nav>` element to identify it as a navigation section to
 * screen readers and other assistive technologies.
 * 
 * Be sure to provide proper screen reader support with `aria` attributes.
 */
export default {
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
  render: () => `<nav>
  <ul class="sharpen-pagination">
    <li class="page-item disabled">
      <a class="page-link" href="javascript:void(0);" aria-label="First">
        <span aria-hidden="true"><i class="sharpen-icon">keyboard_double_arrow_left</i></span>
      </a>
    </li>
    <li class="page-item disabled">
      <a class="page-link" href="javascript:void(0);" aria-label="Previous">
        <span aria-hidden="true"><i class="sharpen-icon">keyboard_arrow_left</i></span>
      </a>
    </li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="javascript:void(0);">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0);" aria-label="Next">
        <span aria-hidden="true"><i class="sharpen-icon">keyboard_double_arrow_right</i></span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0);" aria-label="Last">
        <span aria-hidden="true"><i class="sharpen-icon">keyboard_arrow_right</i></span>
      </a>
    </li>
  </ul>
</nav>`,
};

export const Example = {
  args: {},
};