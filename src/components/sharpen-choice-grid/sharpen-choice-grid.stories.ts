/**
 * A **choice grid** shows story-related choices for a child to select, most
 * often on a mobile device.
 */
export default {
  title: 'Organisms/Choice Grid',
  tags: ['autodocs'],
  argTypes: {
    layout: {
      description: 'Should the choices appear in a grid, or a single column?',
      options: ['grid', 'column'],
      control: 'radio',
      table: { defaultValue: { summary: 'grid' } },
    },
  },
  args: {
    layout: 'grid',
  },
  render: args => `<sharpen-choice-grid layout="${args.layout}">
  <a href="#">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/200" />
        <div class="title">a little bunny in the forest</div>
      </sharpen-card>
    </a>
    <a href="#">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/200" />
        <div class="title">fox</div>
      </sharpen-card>
    </a>
    <a href="#">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/200" />
        <div class="title">lion</div>
      </sharpen-card>
    </a>
    <a href="#">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/200" />
        <div class="title">truck</div>
      </sharpen-card>
    </a>
</sharpen-choice-grid>`,
};

/** A grid of options, for showing image-label pairs. */
export const Grid = {
  args: {
    layout: 'grid',
  },
};

/** Options in a single column, for showing short sentences in a large font. */
export const Column = {
  args: {
    layout: 'column',
  },
  render: args => `<sharpen-choice-grid layout="${args.layout}">
<a href="#">
  <sharpen-card border="none" padding="large">
    Sam ran to get the hen
  </sharpen-card>
</a>
<a href="#">
  <sharpen-card border="none" padding="large">
    Sam sat on the hen
  </sharpen-card>
</a>
<a href="#">
  <sharpen-card border="none" padding="large">
    Sam sat on the mat
  </sharpen-card>
</a>
</sharpen-choice-grid>
`,
};
