import { Component, Host, Prop, h } from '@stencil/core';

export type AlertType = 'success' | 'warning' | 'danger';

@Component({
  tag: 'sharpen-alert',
  styleUrl: 'sharpen-alert.scss'
})
export class SharpenAlert {

  /**
   * Alert type
   */
  @Prop() type!: AlertType;

  /**
   * Icon
   */
  @Prop() icon: string;

  /**
   * The alert heading
   */
  @Prop() heading: string;


  render() {
    let icon = (this.icon ? <div class="sharpen-alert--icon"><i class="sharpen-icon">{this.icon}</i></div> : ''),
        heading = (this.heading ? <h3 class="sharpen-alert--heading">{this.heading}</h3> : '');

    return (
      <Host type={this.type}>
        {icon}
        <div class="sharpen-alert--message">
          {heading}
          <slot></slot>
        </div>
      </Host>
    );
  }

}
