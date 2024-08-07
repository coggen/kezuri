import { Component, Element, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'sharpen-journey-level',
  styleUrl: 'sharpen-journey-level.scss',
})
export class SharpenJourneyLevel {

  @Element() el: HTMLElement;

  @Prop() name!: string;
  @Prop() status!: string;
  @Prop() units: number;
  @Prop() currentUnit: number;
  @Prop() unitProgress: number;

  // By default, the 'current' level is displayed open
  @State() opened: boolean = this.status == "current";

  componentDidLoad() {
    this.setupJourneyLevel();
  }

  render() {
    return (
      <Host>
        <div class="level-name">
          {this.getLevelIcon()}<button>{this.name}</button>
        </div>
        <div class={this.getLevelContentClass()}>
          <div class="level-description">
            <slot></slot>
          </div>

          {this.getLevelUnitCount()}
          {this.getLevelUnitNumbers()}

          {this.getUnitProgress()}
          {this.getUnitProgressBar()}
        </div>
        
      </Host>
    );
  }

  setupJourneyLevel() {
    this.el.querySelector(".level-name button").addEventListener('click', () => {
      this.opened = !this.opened;
    });
  }

  getLevelContentClass() {
    if (this.opened) {
      return "level-content open"
    } else {
      return "level-content"  
    }
  }

  getLevelIcon() {
    if (this.status == "current") {
      return <i class="sharpen-icon filled">arrow_circle_right</i>
    } else if (this.status == "completed") {
      return <i class="sharpen-icon filled">check_circle</i>
    } else {
      return <i class="sharpen-icon filled">circle</i>
    }
  }

  getLevelUnitCount() {
    if (this.status == "current") {
      return <div class="level-unit-count"><strong>{this.units} units</strong></div>
    }
  }

  getLevelUnitNumbers() {
    if (this.status == "current") {
      var numbers = [];
      for (let unit = 1; unit <= this.units; unit++) {
        if (unit < this.currentUnit) {
          numbers.push(<i class="sharpen-icon filled">check_circle</i>)
        } else if (unit == this.currentUnit) {
          numbers.push(<span class="unit-number current">{unit}</span>)  
        } else {
          numbers.push(<span class="unit-number">{unit}</span>)  
        }
        
      }
      return <div class="level-units">{numbers}</div>;
    }
  }

  getUnitProgress() {
    if (this.status == "current") {
      return <div class="unit-progress"><i class="sharpen-icon">arrow_forward</i><strong>Unit {this.currentUnit}</strong> &mdash; {this.unitProgress}% complete</div>
    }
  }

  getUnitProgressBar() {
    if (this.status == "current") {
      return <sharpen-progress-bar size="wider" progress-val={this.unitProgress} high-threshold={100} low-threshold={100} elevated-threshold={100}></sharpen-progress-bar>
    }
  }
}
