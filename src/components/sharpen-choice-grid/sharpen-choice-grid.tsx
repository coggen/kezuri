import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-choice-grid',
  styleUrl: 'sharpen-choice-grid.scss',
})
export class SharpenChoiceGrid {

  render() {

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
