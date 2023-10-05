/**
 * Primary Navigation has four key responsibilities:
 * 
 * - Show the brand
 * - display the current learner (and a menu of the user's other learners)
 * - display learner-specific navigation links
 * - provide a menu of account links for the current user
 * 
 * The component takes its content in three slots:
 * 
 * - The default slot takes a series of `sharpen-nav-link` elements (e.g. "Dashboard" and "Sharpen Reading" in this example).
 * - The `learner-links` slot takes an element of class `sharpen-menu-links` to display in the learner menu.
 * - The `user-links` slot takes an element of class `sharpen-menu-links` to display in the current user menu.
 */
export default {
  title: 'Organisms/Primary Navigation',
  tags: ['autodocs'],
  argTypes: {
    brandHref: {
      description: 'URL that the brand image should link to',
    },
    currentLearner: {
      description: 'Name of the current learner',
    },
    currentUser: {
      description: 'Name of the current user',
    }
  },
  args: {
    brandHref: 'https://sharpen.com',
    currentLearner: 'Jurickson Profar',
    currentUser: 'Belinda Profar'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const LoggedInWithLearner = {
  render: (args) => `<sharpen-primary-navigation brand-href="${args.brandHref}" current-learner="${args.currentLearner}" current-user="${args.currentUser}">
  <sharpen-nav-link name="Dashboard" selected="true" href="#"></sharpen-nav-link>
  <sharpen-nav-link name="Sharpen Reading" href="#"></sharpen-nav-link>

  <div slot="learner-links" class="sharpen-menu-links">
    <h5 class="sharpen-nav-link-header">Learners</h5>
    <sharpen-nav-link icon="face" name="Jurdrick Profar" href="#"></sharpen-nav-link>  
    <sharpen-nav-link icon="face" name="Juremy Profar" href="#"></sharpen-nav-link>  
    <sharpen-nav-link icon="face" name="Jurickson Profar" href="#"></sharpen-nav-link>  
    <sharpen-nav-link icon="add" name="Add new..." href="#"></sharpen-nav-link>  
  </div>

  <div slot="user-links" class="sharpen-menu-links">
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
</sharpen-primary-navigation>`
};

export const LoggedInWithoutLearner = {
  render: (args) => `<sharpen-primary-navigation brand-href="${args.brandHref}" current-user="${args.currentUser}">
  <div slot="user-links" class="sharpen-menu-links">
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
</sharpen-primary-navigation>`
}

export const NotLoggedIn = {
  render: (args) => `<sharpen-primary-navigation brand-href="${args.brandHref}"></sharpen-primary-navigation>`
}