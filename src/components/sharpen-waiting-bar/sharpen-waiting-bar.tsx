import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-waiting-bar',
  styleUrl: 'sharpen-waiting-bar.scss',
})
export class SharpenWaitingBar {

  render() {

    return (
      <Host>
        <div class="bar"></div>
      </Host>
    );
  }

}
