import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'sharpen-course-description',
  styleUrl: 'sharpen-course-description.scss'
})
export class SharpenCourseDescription {

  /**
   * Icon
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <sharpen-card padding="medium" border="gray">
          <i class="sharpen-icon">{this.icon}</i>
          <div>
            <ul class="sharpen-list">
              <slot></slot>
            </ul>
          </div>
        </sharpen-card>
      </Host>
    );
  }

}
