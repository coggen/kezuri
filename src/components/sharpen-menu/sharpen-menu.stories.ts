/**
 * Use a dropdown **menu** to show the user a toggleable list of contextual
 * links. A menu is toggled by clicking its *trigger* element. We use the
 * [Tether](https://tetherjs.dev/) library to position the menu relative to its
 * trigger. A menu will remain open as long as the user's cursor remains within
 * the menu.
 */
export default {
  title: 'Organisms/Menu',
  tags: ['autodocs'],
  render: () => `
<sharpen-menu class="show">
  <div class="sharpen-menu-links">
    <sharpen-nav-link icon="account_box" name="Account" href="#"></sharpen-nav-link>
    <hr>
    <h5 class="sharpen-nav-link-header">Learner Settings</h5>
    <sharpen-nav-link icon="edit" name="Jurdrick Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="edit" name="Juremy Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="edit" name="Jurickson Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="add" name="Add new..." href="#"></sharpen-nav-link>  
    <hr>
    <sharpen-nav-link icon="logout" name="Log Out" href="#"></sharpen-nav-link>  
  </div>
</sharpen-menu>`
};

/**
 * Note: This example forces the menu to be visible using the `show` class. In
 * actual usage, visibility is managed by the component.
 */
export const Example = {};

export const LiveExample = {
  render: () => `<button class="sharpen-button sharpen-button--primary sharpen-button--small" id="menu-trigger">Menu toggle</button>
<sharpen-menu trigger-id="menu-trigger">
  <div class="sharpen-menu-links">
    <h5 class="sharpen-nav-link-header">Learners</h5>
    <sharpen-nav-link icon="face" name="Jurdrick Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="face" name="Juremy Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="face" name="Jurickson Profar" href="#"></sharpen-nav-link>
    <sharpen-nav-link icon="add" name="Add new..." href="#"></sharpen-nav-link>  
  </div>
</sharpen-menu>`
};

/**
 * Use `attachment` and `target-attachment` attributes to control how the
 * menu is positioned relative to its trigger (the target). See the
 * [Tether docs](https://tetherjs.dev/) on 'Attachment' for more details.
 */
export const AttachmentSettings = {
  render: () => `<button style="float:right;" class="sharpen-button sharpen-button--primary sharpen-button--small" id="menu-trigger2">Menu toggle</button>
<sharpen-menu trigger-id="menu-trigger2" attachment="top right" target-attachment="bottom right">
  <div class="sharpen-menu-links">
    <sharpen-nav-link icon="face" name="Jurickson Profar" href="#"></sharpen-nav-link>
  </div>
</sharpen-menu>`
};