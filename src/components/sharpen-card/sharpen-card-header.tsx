import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-card-header'
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
