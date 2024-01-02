import { Component, Prop, State, Watch, Host, h, getAssetPath } from '@stencil/core';

enum ProgressDialStatus {
  unknown = "unknown",
  low = "low",
  elevated = "elevated",
  high = "high"
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
  @Prop() description: string;

  @State() status: ProgressDialStatus = this.getStatus();

  @Watch('progressVal')
  handleProgressChange() {
    this.status = this.getStatus();
  }

  render() {
    const description = (this.description ? <div class="progress-description">{this.description}</div> : '');
    const image = getAssetPath('assets/images/progress_dial_' + this.status + '.png');

    return (
      <Host status={this.status.toLowerCase()}>
        <div class="progress-container">
          <img src={image} alt={this.status} />
        </div>
        {description}
      </Host>
    );
  }

  getStatus() {
    let status = ProgressDialStatus.unknown;

    if (this.progressVal > 0 && this.progressVal <= this.lowThreshold) {
      status = ProgressDialStatus.low;
    } else if (this.progressVal > this.lowThreshold && this.progressVal <= this.elevatedThreshold) {
      status =  ProgressDialStatus.elevated;
    } else if (this.progressVal > this.elevatedThreshold) {
      status = ProgressDialStatus.high;
    }

    return status;
  }

}
