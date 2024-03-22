import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-story-header',
  styleUrl: 'sharpen-story-header.scss',
})
export class SharpenStoryHeader {

  render() {

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
