import { Component, Prop, Host, h } from '@stencil/core';

export type CardPadding = 'none' | 'small' | 'medium' | 'large';
export type CardBorder = 'none' | 'gray';

@Component({
  tag: 'sharpen-card',
  styleUrl: 'sharpen-card.scss',
})
export class SharpenCard {
  /**
   * Border style
   */
  @Prop() border: CardBorder = 'none';

  /**
   * Padding size
   */
  @Prop() padding: CardPadding = 'small';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
