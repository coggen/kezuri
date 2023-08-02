import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-empty',
  styleUrl: 'sharpen-empty.scss',
})
export class SharpenEmpty {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
