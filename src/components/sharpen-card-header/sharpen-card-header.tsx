import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-card-header',
  styleUrl: 'sharpen-card-header.scss',
})
export class SharpenCardHeader {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
