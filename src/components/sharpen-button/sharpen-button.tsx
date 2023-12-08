import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-button',
  styleUrl: 'sharpen-button.scss',
})

export class SharpenButton {

  @Prop() method: string = 'get';
  @Prop() authToken: string;
  @Prop() destination: string = 'self';
  @Prop() text: string;
  @Prop() path: string;

  determine_button() {
    if (['post', 'put', 'patch'].includes(this.method)) {
      return(
        <form action="${this.path}" method="post">
          <input
            type="hidden"
            name="authenticity_token"
            value="${this.authToken}"
          />
          <input type="hidden" name="_method" value="${this.method}" autocomplete="off" />
          <button
            type="submit"
            id="txt-btn"
            name="btn"
            value="btn"
          >
            {this.text}
          </button>
        </form>
      );
    } else if (this.method == 'submit') {
      return (
        <button
          type="submit"
          id="txt-btn"
          name="btn"
          value="btn"
        >
          {this.text}
        </button>
      );
    } else {
      return (
        <a
          id="txt-btn"
          href={this.path}
          target={this.destination == 'self' ? `_self` : `_blank`}
        >
          {this.text}
        </a>
      );
    }
  }

  render() {
    return (
      <Host>
        {this.determine_button()}
      </Host>
    );
  }

}
