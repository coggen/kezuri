import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-dashboard-card',
  styleUrl: 'sharpen-dashboard-card.scss',
})
export class SharpenDashboardCard {

  @Prop() heading!: string;
  @Prop() imgSrc!: string;
  @Prop() subheading: string;
  @Prop() primaryLink: string;
  @Prop() primaryLinkText: string;
  @Prop() secondaryLink: string;
  @Prop() secondaryLinkText: string;

  render() {
    return (
      <Host>
        <sharpen-card border="none" padding="large">
          <div class="dashboard-card-header">
            <div class="subheading">{this.subheading}</div>
            <div class="link"><a href={this.secondaryLink}>{this.secondaryLinkText}</a></div>
          </div>
          <img src={this.imgSrc} alt={this.heading} />
          <h2>{this.heading}</h2>
          <hr />
          <div class="dashboard-card-description">
            <slot></slot>
          </div>
          <slot name="primary-button">
            <a href={this.primaryLink} class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width">
              {this.primaryLinkText}
            </a>
          </slot>
        </sharpen-card>
      </Host>
    );
  }

}
