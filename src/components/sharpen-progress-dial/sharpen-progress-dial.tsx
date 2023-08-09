import { Component, Prop, State, Watch, Host, h } from '@stencil/core';
import * as pureknob from '../../utils/pure-knob.js';

enum ProgressDialStatus {
  unknown = "Unknown",
  low = "Low",
  elevated = "Elevated",
  high = "High"
}

@Component({
  tag: 'sharpen-progress-dial',
  styleUrl: 'sharpen-progress-dial.scss',
})
export class SharpenProgressDial {

  @Prop() highThreshold = 100;
  @Prop() lowThreshold = 0.33 * this.highThreshold;
  @Prop() elevatedThreshold = 0.66 * this.highThreshold;
  @Prop() progressVal = 0;
  @Prop() showValue: boolean = false;
  @Prop() showDescription: boolean = false;
  @Prop() statusLabel: string;

  @State() status: ProgressDialStatus = this.getStatus();

  @Watch('progressVal')
  handleProgressChange() {
    this.status = this.getStatus();
    console.log("progress val changed");
  }

  render() {
    const description = (this.showDescription ? <div class="progress-description">{this.status} {this.statusLabel}</div> : '');
    const dial = 'TBD';
    // const dial = this.createDial();

    return (
      <Host status={this.status.toLowerCase()}>
        <div class="progress-container">
          {dial}
        </div>
        {description}
      </Host>
    );
  }

  getStatus() {
    let status = ProgressDialStatus.unknown;

    if (this.progressVal <= this.lowThreshold) {
      status = ProgressDialStatus.low;
    } else if (this.progressVal > this.lowThreshold && this.progressVal <= this.elevatedThreshold) {
      status =  ProgressDialStatus.elevated;
    } else if (this.progressVal > this.elevatedThreshold) {
      status = ProgressDialStatus.high;
    }

    return status;
  }

  createDial() {
    // Create knob element, (w, h) px in size.
    const knob = pureknob.createKnob(159, 159);

    // const resultColor = this.determineResultColor();

    // Set properties.
    knob.setProperty('angleStart', -0.7 * Math.PI);
    knob.setProperty('angleEnd', 0.7 * Math.PI);
    // knob.setProperty('colorBG', sharpenColors.gray4.cssText);
    // knob.setProperty('colorFG', resultColor.cssText);
    knob.setProperty('trackWidth', 0.28);
    knob.setProperty('valMin', 0);
    knob.setProperty('valMax', this.highThreshold | 0);
    knob.setProperty('readonly', true);

    if (this.showValue) {
      knob.setProperty('showValueLabel', true);
    }

    // Set initial value.
    knob.setValue(this.progressVal);

    // Create element node.
    return knob.node();
  }

}
