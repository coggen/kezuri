/**
 * Used within our Onboarding Wizard to display the features of a child's
 * personalized Sharpen Reading course. Fill it with list items.
 */
export default {
  title: 'Molecules/Course Description',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Icon to display'
    }
  },
  args: {
    icon: 'trophy'
  },
  render: (args) => `<sharpen-course-description icon="${args.icon}">
  <li>Start at Sharpen <strong>Level B1</strong></li>
  <li>Easily read texts at a Grade 1 level by <strong>February 28</strong>.</li>
  <li>Build increased confidence in reading.</li>
</sharpen-course-description>`
};

export const Example = { };