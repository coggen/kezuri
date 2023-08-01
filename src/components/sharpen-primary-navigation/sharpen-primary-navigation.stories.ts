/**
 * Primary Navigation
 */
export default {
  title: 'Organisms/Primary Navigation',
  tags: ['autodocs'],
  render: () => `
<sharpen-primary-navigation current-user="Jurickson Profar">
  <sharpen-nav-link name="Dashboard" href="#" selected="true"></sharpen-nav-link>
  <sharpen-nav-link name="Assessments" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Sharpen Reading" href="#"></sharpen-nav-link>
</sharpen-page-navigation>`
};

export const Example = {
  args: { }
};
