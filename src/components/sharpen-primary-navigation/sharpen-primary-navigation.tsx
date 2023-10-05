import { Component, Prop, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'sharpen-primary-navigation',
  styleUrl: 'sharpen-primary-navigation.scss',
})
export class SharpenPrimaryNavigation {

  @Prop() brandHref: string;
  @Prop() currentLearner: string;
  @Prop() currentUser: string;

  render() {

    const logoSrc = getAssetPath('assets/images/brand/sharpen_logo_ivory.png');

    const currentLearnerEl = (this.currentLearner ? <div id="spn-current-learner">{this.currentLearner}</div> : '')
    const currentUserEl = (this.currentUser ? <div id="spn-current-user">{this.currentUser}</div> : '')

    return (
      <Host>
        <div class="container-fluid">
          <nav>
            <a class="brand" href={this.brandHref}><img src={logoSrc} /></a>
            {currentLearnerEl}
            <sharpen-menu trigger-id="spn-current-learner"><slot name="learner-links"></slot></sharpen-menu>

            <slot></slot>
          </nav>
          {currentUserEl}
          <sharpen-menu trigger-id="spn-current-user" attachment="top right" target-attachment="bottom right"><slot name="user-links"></slot></sharpen-menu>
        </div>
      </Host>
    );
  }

}
