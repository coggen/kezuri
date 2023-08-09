import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-assessment-header',
  styleUrl: 'sharpen-assessment-header.scss'
})
export class SharpenAssessmentHeader {

  @Prop() name!: string;
  @Prop() section: string;
  @Prop() progress: number;

  render() {
    console.log("progress: " + this.progress);

    const section = (this.section ? <h3 class="section">{this.section}</h3> : '');
    const label = (typeof this.progress !== 'undefined' ? <sharpen-label type="success">{this.progress}% complete</sharpen-label> : '');

    return (
      <Host>
        <h2 class="name">{this.name}</h2>
        <div class="meta">
          {section}
          {label}
        </div>
      </Host>
    );
  }

}
