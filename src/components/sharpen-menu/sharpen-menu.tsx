import { Component, Element, Host, h, Prop } from '@stencil/core';
import Tether from 'tether';

enum MenuStatus {
  hidden,
  displaying
}

enum MouseStatus {
  onMenu,
  outsideMenu
}

@Component({
  tag: 'sharpen-menu',
  styleUrl: 'sharpen-menu.scss',
})
export class SharpenMenu {

  @Element() el: HTMLElement;
  @Prop() triggerId: string;
  @Prop() attachment: string = 'top left';
  @Prop() targetAttachment: string = 'bottom left';

  trigger;
  tether;
  menuStatus = MenuStatus.hidden;
  mouseStatus = MouseStatus.outsideMenu;

  componentDidLoad() {
    this.setupMenu();  
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  setupMenu() {
    this.trigger = document.getElementById(this.triggerId);
    
    this.trigger.addEventListener('click', () => {
      if (this.menuStatus == MenuStatus.hidden) {
        this.showMenu();
      } else {
        this.hideMenu();
      }
    });

    this.trigger.addEventListener('mouseleave', () => {
      var self = this;
      setTimeout(function () {
        if (self.menuStatus == MenuStatus.displaying && self.mouseStatus != MouseStatus.onMenu) {
          self.hideMenu();
        }
      }, 500);
    });

    this.el.addEventListener('mouseenter', () => {
      this.mouseStatus = MouseStatus.onMenu;
    });

    this.el.addEventListener('mouseleave', () => {
      this.hideMenu();
    });

    if (this.tether) {
      this.tether.setOptions(this.getTetherOptions());
    } else {
      this.tether = new Tether(this.getTetherOptions())
    }
  }

  showMenu() {
    this.menuStatus = MenuStatus.displaying;
    this.el.classList.add("show");
    this.tether.position();
  }

  hideMenu() {
    this.menuStatus = MenuStatus.hidden;
    this.mouseStatus = MouseStatus.outsideMenu;
    this.el.classList.remove("show");
  }

  getTetherOptions() {
    return {
      element: this.el,
      target: this.trigger,
      attachment: this.attachment,
      targetAttachment: this.targetAttachment,
      offset: '-5px 0'
    };
  }
}
