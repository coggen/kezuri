import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-profile-card',
  styleUrl: 'sharpen-profile-card.scss',
})
export class SharpenProfileCard {

  @Prop() name!: string;
  @Prop() initial!: string;
  @Prop() buttonText: string = "Select";
  @Prop() url!: string;

  render() {
    return (
      <Host>
        <sharpen-card border="gray" padding="large">
          <div class="initial">{this.initial}</div>
          <div class="name">{this.name}</div>
          <a class="sharpen-button sharpen-button--primary sharpen-button--small" href={this.url}>{this.buttonText}</a>
        </sharpen-card>
      </Host>
    );
  }

}
