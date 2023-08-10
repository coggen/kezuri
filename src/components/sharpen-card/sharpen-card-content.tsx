import { Component, Prop, Host, h } from '@stencil/core';
import { CardPadding } from '../sharpen-card/sharpen-card';

@Component({
  tag: 'sharpen-card-content'
})
export class SharpenCardContent {

  /**
   * Padding size
   */
  @Prop() padding: CardPadding = 'none';

  render() {
    return (
      <Host padding={this.padding}>
        <slot></slot>
      </Host>
    );
  }

}
