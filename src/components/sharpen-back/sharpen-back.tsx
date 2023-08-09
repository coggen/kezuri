import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-back',
  styleUrl: 'sharpen-back.scss',
})
export class SharpenBack {

  @Prop() href: string;

  render() {
    return (
      <Host>
        <a href={this.href}><i class="sharpen-icon">chevron_left</i><slot></slot></a>
      </Host>
    );
  }

}
