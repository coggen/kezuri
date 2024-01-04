import { optional } from '../../utils/utils';

/**
 * A title and progress bar tailored for our onboarding wizard. (The progress bar is always green.)
 */
export default {
  title: 'Organisms/Wizard Header',
  tags: ['autodocs'],
  argTypes: {
    section: {
      description: 'The current section.'
    },
    currentStep: {
      description: 'The number of the current step.'
    },
    totalSteps: {
      description: 'The total number of steps in the wizard.'
    },
    backHref: {
      description: 'Optional back button link.'
    }
  },
  render: (args) => `<sharpen-wizard-header section="${args.section}" current-step="${args.currentStep}" total-steps="${args.totalSteps}"${optional('back-href', args.backHref)}></sharpen-wizard-header>`
};

export const WithBackButton = {
  args: {
    section: 'Learning Profile',
    currentStep: 3,
    totalSteps: 65,
    backHref: 'foo.html'
  }
}

/** On the first page of a wizard, we may not want to display a back button. */
export const WithoutBackButton = {
  args: {
    section: 'Learning Profile',
    currentStep: 3,
    totalSteps: 65
  }
};

