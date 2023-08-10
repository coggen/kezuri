import { Component, Prop, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'sharpen-dashboard-card',
  styleUrl: 'sharpen-dashboard-card.scss',
})
export class SharpenDashboardCard {

  // heading="Placement: Level A" subheading="Sharpen Reading" primary-link="#" primary-link-text="Start Sharpen Reading" secondary-link="#" secondary-link-text="View Details" img-src=""

  @Prop() heading!: string;
  @Prop() imgSrc!: string;
  @Prop() subheading: string;
  @Prop() primaryLink: string;
  @Prop() primaryLinkText: string;
  @Prop() secondaryLink: string;
  @Prop() secondaryLinkText: string;

  render() {
    const imgPath = getAssetPath('assets/images/' + this.imgSrc);

    return (
      <Host>
        <sharpen-card border="none" padding="large">
          <div class="dashboard-card-header">
            <div class="subheading">{this.subheading}</div>
            <div class="link"><a href={this.secondaryLink}>{this.secondaryLinkText}</a></div>
          </div>
          <img src={imgPath} alt={this.heading} />
          <h2>{this.heading}</h2>
          <hr />
          <div class="dashboard-card-description">
            <slot></slot>
          </div>
          <a href={this.primaryLink} class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width">
            {this.primaryLinkText}
          </a>
        </sharpen-card>
      </Host>
    );
  }

}
