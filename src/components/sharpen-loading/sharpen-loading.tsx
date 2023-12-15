import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-loading',
  styleUrl: 'sharpen-loading.scss',
})
export class SharpenLoading {

  render() {
    return (
      <Host>
        <span class="dot dot1"></span>
        <span class="dot dot2"></span>
        <span class="dot dot3"></span>
      </Host>
    );
  }

}
