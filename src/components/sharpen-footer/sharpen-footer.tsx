import { Component, Prop, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'sharpen-footer',
  styleUrl: 'sharpen-footer.scss',
})
export class SharpenFooter {

  /**
   * Border style
   */
  @Prop() currentUser: string;

  render() {

    const logoSrc = getAssetPath('assets/images/brand/sharpen_logo.svg');

    return (
      <Host>
        <div class="container-fluid">
          <img class="brand" src={logoSrc} />
          <nav>
            <slot></slot>
          </nav>
          <div class="trademarks">
            Sharpen, Sharpen.com, and the Sharpen logo are trademarks of Sharpen.com, Inc.
          </div>
        </div>
      </Host>
    );
  }

}
