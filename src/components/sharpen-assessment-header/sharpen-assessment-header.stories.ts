/**
 * Used atop a `sharpen-card` for each step in an assessment.
 */
export default {
  title: 'Organisms/Assessment Header',
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'The name of the assessment',
    },
    section: {
      description: 'Optional assessment section name',
    },
    progress: {
      description: 'Optional progress percentage (0-100)',
    },
  },
  render: args => `<sharpen-card border="none" padding="large">
  <sharpen-assessment-header name="${args.name}"${args.section ? ' section="' + args.section + '"' : ''}${args.progress ? ' progress="' + args.progress + '"' : ''}></sharpen-assessment-header>
</sharpen-card>`,
};

/**
 * Once we start asking the user questions, we show the assessment name, the
 * current section and overall percentage progress.
 */
export const WithSectionAndProgress = {
  args: {
    name: 'Family History',
    section: 'Biological Parent',
    progress: 12,
  },
};

/**
 * Before the question-asking begins, on introductory pages, we only show
 * the assessment title.
 */
export const NameOnly = {
  args: {
    name: 'Family History',
  },
};
