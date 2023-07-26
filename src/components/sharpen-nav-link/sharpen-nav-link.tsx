import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-nav-link',
  styleUrl: 'sharpen-nav-link.scss',
})
export class SharpenNavLink {

  @Prop() name: string;
  @Prop() icon: string;
  @Prop() href: string;
  @Prop() selected: boolean = false;

  render() {
    let sharpenIcon = (this.icon ? <i class="sharpen-icon">{this.icon}</i> : '');

    return (
      <a href={this.href}>{sharpenIcon}{this.name}</a>
    );
  }

}
