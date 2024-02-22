/*
<svg viewBox="0 0 36 36" class="circular-chart">
  <path class="circle-bg"
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <path class="circle"
    stroke-dasharray="30, 100"
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <text x="18" y="20.35" class="percentage">30%</text>
</svg>
*/

import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-progress-circle',
  styleUrl: 'sharpen-progress-circle.scss',
})
export class SharpenProgressCircle {

  @Prop() progressVal;
  @Prop() progressLabel;

  render() {
    let progressVal = this.progressVal + ", 100"

    return (
      <Host>
        <svg viewBox="0 0 36 36" class="circle-chart">
          <path class="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path class="circle"
            stroke-dasharray={progressVal}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="label">{this.progressLabel}</text>
        </svg>
      </Host>
    );
  }

}
