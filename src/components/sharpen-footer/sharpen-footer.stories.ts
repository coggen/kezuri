/**
 * The page footer. Add `sharpen-nav-link` elements for the required legal
 * documents. Layout adapts gracefully on all screen widths.
 */
export default {
  title: 'Organisms/Page Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};

export const Example = {
  render: () => `<sharpen-footer>
  <span class="copyright">&copy; 2023 Sharpen.com, Inc.</span>
  <sharpen-nav-link name="Privacy Statement" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Terms of Service" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Cookie Policy" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Contact Us" href="mailto:support@sharpen.com"></sharpen-nav-link>
</sharpen-footer>`
};
