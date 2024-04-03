/**
 * In the storymaker, a **story header** displays an image or icon above
 * a spoken message.
 */
export default {
  title: 'Molecules/Story Header',
  tags: ['autodocs'],
};

export const HeaderWithImage = {
  render: () => `<sharpen-story-header>
  <img src="https://placehold.co/800/orange/white?text=Character" alt="Character">
</sharpen-story-header>
<div id="page-instruction" class="sharpen-text--center sharpen-text-xl sharpen-mb-lg">
  OK! Let me build a story about a fox in a forest.
</div>
`,
};

export const HeaderWithIcon = {
  render: () => `<sharpen-story-header>
  <i class="sharpen-icon">question_mark</i>
</sharpen-story-header>
<sharpen-choice-grid layout="column">
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
</sharpen-choice-grid>`,
};
