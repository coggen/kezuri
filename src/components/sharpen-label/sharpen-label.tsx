import { Component, Host, Prop, h } from '@stencil/core';

export type LabelType = "success" | "warning" | "danger" | "info";

@Component({
  tag: 'sharpen-label',
  styleUrl: 'sharpen-label.scss'
})
export class SharpenLabel {

  /**
   * Alert type
   */
  @Prop() type!: LabelType;

  /**
   * Icon
   */
  @Prop() icon: string;

  render() {
    let icon = (this.icon ? <i class="sharpen-icon">{this.icon}</i> : '');

    return (
      <Host type={this.type}>
        {icon}<slot></slot>
      </Host>
    );
  }

}
