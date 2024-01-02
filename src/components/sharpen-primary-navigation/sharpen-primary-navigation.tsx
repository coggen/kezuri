import { Component, Prop, Host, getAssetPath, h, Element } from '@stencil/core';

@Component({
  tag: 'sharpen-primary-navigation',
  styleUrl: 'sharpen-primary-navigation.scss',
})
export class SharpenPrimaryNavigation {

  @Element() el: HTMLElement;

  @Prop() brandHref: string;
  @Prop() currentLearner: string;
  @Prop() currentUser: string;

  // The button element that triggers the mobile app menu
  menuTrigger;
  // The HTML of the app menu links (if present)
  appLinks;
  // The desktop app menu navigation
  appNav;

  render() {

    // The full-size logo
    const logoSrc = getAssetPath('assets/images/brand/sharpen_logo_ivory.png');
    // Logo mark without the text
    const markSrc = getAssetPath('assets/images/brand/sharpen_mark_ivory.png');

    return (
      <Host>
        <div class="navbar container-fluid">
          
          <a class="brand d-none d-lg-flex" href={this.brandHref}><img src={logoSrc} /></a>
          <a class="brand d-lg-none" href={this.brandHref}><img src={markSrc} /></a>
          
          {this.getCurrentLearnerButton()}
          {this.getAppMenuButton()}
          
          <nav id="spn-app-nav"></nav>
          
          {this.getCurrentUserButton()}
        </div>

        <slot name="app-links"></slot>

        {this.getCurrentUserMenu()}
        {this.getCurrentLearnerMenu()}
      </Host>
    );
  }

  /**
   * Before the component renders, capture the HTML of the app links, if
   * present, so they can be shown in both desktop and mobile layouts.
   */
  componentWillLoad() {
    this.appLinks = this.el.querySelector('[slot="app-links"]').innerHTML;
  }

  /**
   * Once the component is loaded on the page, setup the mobile and desktop
   * app menus.
   */
  componentDidLoad() {
    this.setupAppMenu();
    this.setupAppNav();
  }

  /**
   * If app links are present, initialize the app menu button to so it will
   * hide/show the mobile app menu.
   */
  setupAppMenu() {
    if (this.el.querySelector('[slot="app-links"]')) {
      this.menuTrigger = this.el.querySelector('#spn-app-menu-button');
      this.menuTrigger.addEventListener('click', () => {
        this.el.classList.toggle('menu-open');
      });
    }
  }

  /**
   * If app links are present, initialize the desktop app navigation with
   * the links passed into the app-links slot.
   */
  setupAppNav() {
    if (this.el.querySelector('[slot="app-links"]')) {
      // Duplicate links for desktop layout
      this.el.querySelector('#spn-app-nav').innerHTML = this.appLinks;
    }
  }

  /**
   * If app links are present, return the mobile toggle button HTML.
   */
  getAppMenuButton() {
    if (this.el.querySelector('[slot="app-links"]')) {
      return (
        <i id="spn-app-menu-button" class="sharpen-icon">menu</i>
      );
    }
  }

  /**
   * If a current learner is present, return the learner menu toggle HTML.
   */
  getCurrentLearnerButton() {
    if (this.currentLearner) {
      return ( <div id="spn-current-learner">{this.currentLearner}</div> );
    }
  }

  /**
   * If a current user is present, return the user menu toggle HTML.
   */
  getCurrentUserButton() {
    if (this.currentUser) {
      return (
        <div id="spn-current-user">
          <i class="sharpen-icon d-xl-none">account_circle</i>
          <span class="d-none d-xl-inline">{this.currentUser}</span>
        </div>
      );
    }
  }

  /**
   * If a current user is present, return the user menu HTML.
   */
  getCurrentUserMenu() {
    if (this.currentUser) {
      return ( <sharpen-menu trigger-id="spn-current-user" attachment="top right" target-attachment="bottom right"><slot name="user-links"></slot></sharpen-menu> );
    }
  }

  /**
   * If a current learner is present, return the learner menu HTML.
   */
  getCurrentLearnerMenu() {
    if (this.currentLearner) {
      return ( <sharpen-menu trigger-id="spn-current-learner"><slot name="learner-links"></slot></sharpen-menu> );
    }
  }  

}
