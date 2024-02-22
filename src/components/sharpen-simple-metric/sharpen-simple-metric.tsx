import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-simple-metric',
  styleUrl: 'sharpen-simple-metric.scss',
})
export class SharpenSimpleMetric {

  render() {
    return (
      <Host>
        <div class="metric">
          <slot name="metric"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>        
      </Host>
    );
  }

}
