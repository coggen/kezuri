import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-story-page',
  styleUrl: 'sharpen-story-page.scss',
})
export class SharpenStoryPage {

  @Prop() contentMode: string;
  @Prop() backgroundSrc: string;
  @Prop() characterSrc: string;

  render() {

    return (
      <Host>
        <div class="content">
          <slot></slot>
        </div>
        <div class={this.getFooterClasses()} style={this.getBackgroundStyle()}>
          {this.getCharacterImg()}
        </div>
      </Host>
    );
  }

  getFooterClasses() {
    return {
      "story-footer": true,
      "with-background": this.backgroundSrc && this.backgroundSrc.length > 0,
      "with-character": this.characterSrc && this.characterSrc.length > 0,
    }
  }

  getBackgroundStyle() {
    if (this.backgroundSrc) {
      return { "background-image": 'url(' + this.backgroundSrc + ')' };
    }
  }

  getCharacterImg() {
    if (this.characterSrc) {
      return (
        <img src={this.characterSrc} />
      )
    }
  }

}
