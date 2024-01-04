import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-wizard-header',
  styleUrl: 'sharpen-wizard-header.scss'
})
export class SharpenWizardHeader {

  @Prop() section!: string;
  @Prop() currentStep!: number;
  @Prop() totalSteps!: number;
  @Prop() backHref: string;

  render() {
    const backButton = (this.backHref ? <a href={this.backHref}><i class="sharpen-icon">arrow_back</i></a> : '');

    return (
      <Host>
        <nav class="sharpen-mb-sm">
          {backButton}<h1 class="sharpen-heading-sm">{this.section}</h1>
        </nav>
        <sharpen-progress-bar progress-val={this.currentStep} high-threshold={this.totalSteps} low-threshold={this.totalSteps} elevated-threshold={this.totalSteps}></sharpen-progress-bar>
      </Host>
    );
  }

}
