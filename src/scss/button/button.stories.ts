/**
 * These CSS classes allow you to use button styles on button or anchor tags
 * anywhere in the application.
 */
export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    kind: {
      options: ['primary', 'secondary', 'danger', 'muted', 'link'],
      control: 'radio'
    },
    size: {
      options: ['small', 'large'],
      control: 'radio'
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: (args) => `<button${args.disabled ? ' disabled' : ''} class="sharpen-button sharpen-button--${args.kind} sharpen-button--${args.size}">Click me</button>`
};

/** A small primary button */
export const Primary = {
  args: {
    kind: 'primary',
    size: 'small'
  }
}

/** A small secondary button */
export const Secondary = {
  args: {
    kind: 'secondary',
    size: 'small'
  }
}

/**
 * A button to perform a potentially dangerous action, like deleting or
 * deactivating.
 */
export const Danger = {
  args: {
    kind: 'danger',
    size: 'small'
  }
}
  
/** A small secondary button */
export const Muted = {
  args: {
    kind: 'muted',
    size: 'small'
  }
}

/**
 * A small link-style button. This renders as a link, but with appropriate
 * sizing for using next to other buttons.
 */
export const Link = {
  args: {
    kind: 'link',
    size: 'small',
  }
}

/** Buttons can be either large or small */
export const Large = {
  args: {
    kind: 'primary',
    size: 'large',
  }
}

/** Icons will be positioned appropriately alongside button text. */
export const Icons = {
  args: {
    kind: 'primary',
    size: 'small',
  },
  render: (args) => `
    <button class="sharpen-button sharpen-button--${args.kind} sharpen-button--${args.size}">
  <i class="sharpen-icon">arrow_left_alt</i>
  Go left
</button>
<button class="sharpen-button sharpen-button--${args.kind} sharpen-button--${args.size}">
  Go right
  <i class="sharpen-icon">arrow_right_alt</i>
</button>
<button class="sharpen-button sharpen-button--${args.kind} sharpen-button--${args.size}">
  No icon
</button>
  `
}

export const Disabled = {
  args: {
    kind: 'primary',
    size: 'small',
    disabled: true
  }
}

/** Full width buttons extend across the available space. */
export const FullWidth = {
  render: () => `<sharpen-card border="gray" padding="large">
  <button class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width">Full width button</button>
</sharpen-card>`
}