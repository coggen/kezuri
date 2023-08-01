/**
 * When a page has multiple sub-pages, use **page navigation** to help the user
 * know what is available and where they are currently. Fill a `sharpen-page-navigation`
 * element with `sharpen-nav-link` elements to incorporate the links.
 */
export default {
  title: 'Organisms/Page Navigation',
  tags: ['autodocs'],
  render: () => `
<sharpen-page-navigation>
  <sharpen-nav-link name="Account" icon="account_circle" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Payment Method" icon="credit_card" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Learners" icon="school" href="#" selected="true"></sharpen-nav-link>
  <sharpen-nav-link name="Invoices" icon="receipt" href="#"></sharpen-nav-link>
</sharpen-page-navigation>`
};

export const Example = {
  args: { }
};
