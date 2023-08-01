import { Component, Prop, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'sharpen-primary-navigation',
  styleUrl: 'sharpen-primary-navigation.scss',
})
export class SharpenPrimaryNavigation {

  /**
   * Border style
   */
  @Prop() currentUser: string;

  render() {

    const logoSrc = getAssetPath('assets/images/brand/sharpen_logo_ivory.png');

    return (
      <Host>
        <div class="container-fluid">
          <nav>
            <img class="brand" src={logoSrc} />
            <slot></slot>
          </nav>
          <div class="current-user">
            {this.currentUser}
            <i class="sharpen-icon">expand_more</i>
          </div>
        </div>
      </Host>
    );
  }

}
