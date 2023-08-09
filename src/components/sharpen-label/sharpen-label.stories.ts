/**
 * A small element to display a bit of metadata alongside or inside another
 * element.
 */
export default {
  title: 'Molecules/Label',
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: "The type of label",
      options: ['success', 'warning', 'danger', 'info'],
      control: 'radio'
    },
    icon: {
      description: 'Optional icon name'
    }
  },
  args: {
    type: 'success',
    label: 'Complete'
  },
  render: (args) => `<sharpen-label type="${args.type}"${args.icon ? ' icon="' + args.icon + '"' : ''}>${args.label}</sharpen-label>`
};

/** Include any Material Design icon name to have it appear in the label. */
export const LabelWithIcon = {
  args: {
    icon: 'check'
  }
};

/** Labels, of course, can be used without icons. */
export const LabelWithoutIcon = {
  args: { }
};

/** The four label types have unique coloration. */
export const LabelTypes = {
  render: () => `
<sharpen-label type="info">Info</sharpen-label>
<sharpen-label type="danger">Danger</sharpen-label>
<sharpen-label type="warning">Warning</sharpen-label>
<sharpen-label type="success">Success</sharpen-label>
`
}