import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-page-navigation',
  styleUrl: 'sharpen-page-navigation.scss',
})
export class SharpenPageNavigation {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
