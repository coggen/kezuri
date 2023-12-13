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
  @Prop() color: string;
  @Prop() backgroundColor: string;

  render() {
    const initialStyle = {
      color: this.color,
      backgroundColor: this.backgroundColor
    };

    return (
      <Host>
        <sharpen-card border="gray" padding="large">
          <div class="initial" style={initialStyle}>{this.initial}</div>
          <div class="name">{this.name}</div>
          <a class="sharpen-button sharpen-button--primary sharpen-button--small" href={this.url}>{this.buttonText}</a>
        </sharpen-card>
      </Host>
    );
  }

}
