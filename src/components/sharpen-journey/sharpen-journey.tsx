import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-journey',
  styleUrl: 'sharpen-journey.scss',
})
export class SharpenJourney {
  render() {
    return (
      <Host>
        <div class="journey-container">
          <div class="journey-levels">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
