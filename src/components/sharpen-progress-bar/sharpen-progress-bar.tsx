import { Component, Prop, State, Watch, Host, h } from '@stencil/core';

enum ProgressBarStatus {
  low = "Low",
  elevated = "Elevated",
  high = "High"
}

@Component({
  tag: 'sharpen-progress-bar',
  styleUrl: 'sharpen-progress-bar.scss',
})
export class SharpenProgressBar {

  @Prop() highThreshold = 100;
  @Prop() lowThreshold = 0.33 * this.highThreshold;
  @Prop() elevatedThreshold = 0.66 * this.highThreshold;
  @Prop() progressVal = 0;
  @Prop() showDescription: boolean;
  @Prop() statusLabel: string;

  @State() status: ProgressBarStatus = this.getStatus();

  @Watch('progressVal')
  handleProgressChange() {
    this.status = this.getStatus();
    console.log("progress val changed");
  }

  render() {
    let progressStyle = { width: (this.progressVal / this.highThreshold) * 100 + "%" },
      description = (this.showDescription ? <div class="progress-description">{this.status} {this.statusLabel}</div> : '');

    return (
      <Host status={this.status.toLowerCase()}>
        <div class="progress-container">
          <div class="progress-amount" style={progressStyle}></div>
        </div>
        {description}
      </Host>
    );
  }

  getStatus() {
    let status = ProgressBarStatus.low;

    if (this.progressVal > this.lowThreshold && this.progressVal <= this.elevatedThreshold) {
      status =  ProgressBarStatus.elevated;
    } else if (this.progressVal > this.elevatedThreshold) {
      status = ProgressBarStatus.high;
    }

    return status;
  }

}
