import { Component, Prop, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'sharpen-simple-navigation',
  styleUrl: 'sharpen-simple-navigation.scss',
})
export class SharpenSimpleNavigation {

  @Prop() background: string;
  @Prop() brandHref: string;
  @Prop() linkHref: string;
  @Prop() linkText: string;

  render() {
    return (
      <Host>
        <div class="navbar container-fluid">
          <slot>{this.getBrand()}{this.getLink()}</slot>
        </div>
      </Host>
    );
  }

  getBrand() {
    if (this.brandHref) {
      // Logo mark without the text
      const markSrc = getAssetPath('assets/images/brand/sharpen_mark_evergreen.png');

      return (
        <a class="brand" href={this.brandHref}><img src={markSrc} /></a>
      )
    }
  }

  getLink() {
    if (this.linkHref) {
      return (
        <a href={this.linkHref}>{this.linkText}</a>
      )
    }
  }

}
