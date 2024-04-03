import { optional } from '../../utils/utils';

/**
 * A **dashboard card** highlights next steps and important updates for a user
 * within a learner record.
 */
export default {
  title: 'Organisms/Dashboard Card',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      description: 'Main heading, appears larger, in green, below the image.',
    },
    subheading: {
      description: 'Smaller, appears in gray atop the card. Typically a specific product name.',
    },
    primaryLink: {
      description: 'A link that the primary button should direct to.',
    },
    primaryLinkText: {
      description: 'Text to be displayed within the primary button.',
    },
    secondaryLink: {
      description: 'A link to additional information that appears in the upper right. Use sparingly.',
    },
    secondaryLinkText: {
      description: 'The text to display for the secondary link.',
    },
    imgSrc: {
      description: 'URL to the image that should be featured in this card.',
    },
    description: {
      description: 'Explanatory content to display beneath the heading.',
    },
  },
  render: args => `<sharpen-dashboard-card
    heading="${args.heading}"
    subheading="${args.subheading}"
   ${optional('primary-link', args.primaryLink)}
   ${optional('primary-link-text', args.primaryLinkText)}
    secondary-link="${args.secondaryLink}"
    secondary-link-text="${args.secondaryLinkText}"
    img-src="${args.imgSrc}">
  ${args.description}
</sharpen-dashboard-card>`,
};

export const BasicExample = {
  args: {
    heading: 'Placement: Level A',
    subheading: 'Sharpen Reading',
    primaryLink: '#',
    primaryLinkText: 'Start Sharpen Reading',
    secondaryLink: '#',
    secondaryLinkText: 'View Details',
    imgSrc: '/assets/images/placement-level-a@2x.png',
    description: "Congrats on completing the placement assessment for Abby! Abby's reading journey is just beginning. Dive into our exclusive reading program below!",
  },
};

/** When your primary button is not a link, you can pass your button code in
 * through the `primary-button` slot, even embedding the button within a form. Just make sure that
 * your `sharpen-button` uses `sharpen-button--full-width`.
 */
export const PrimaryButton = {
  render: () => `<sharpen-dashboard-card
    heading="Placement: Level A"
    subheading="Sharpen Reading"
    secondary-link="#"
    secondary-link-text="View Details"
    img-src="/assets/images/placement-level-a@2x.png">
  Congrats on completing the placement assessment for Abby! Abby's reading
  journey is just beginning. Dive into our exclusive reading program below!

  <form slot="primary-button" method="post">
    <input type="submit" value="Submit" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width" />
  </form>
</sharpen-dashboard-card>`,
};

/**
 * The dashboard card is a 100%-height flex item, so placing several cards
 * side-by-side in columns should automatically align everything.
 */
export const CardsInAGrid = {
  render: () => `<div class="row row-cols-sm-2">
  <div class="col">
    <sharpen-dashboard-card
        heading="Placement: Level A"
        subheading="Sharpen Reading"
        primary-link="#"
        primary-link-text="Start Sharpen Reading"
        secondary-link="#"
        secondary-link-text="View Details"
        img-src="/assets/images/placement-level-a@2x.png">
      Congrats on completing the placement assessment for Abby! Abby's
      reading journey is just beginning. Dive into our exclusive
      reading program below!
    </sharpen-dashboard-card>
  </div>
  <div class="col">
    <sharpen-dashboard-card
        heading="Result: High Risk"
        subheading="Early Advantage Assessment"
        primary-link="#"
        primary-link-text="Start Sharpen Reading"
        secondary-link="#"
        secondary-link-text="View Details"
        img-src="/assets/images/progress_dial_high.png">
      You have completed Sharpen's Early Advantage Assessment for Abby as
      of August 4, 2023. Abby has a high risk in 1 or more completed
      assessments. It is highly recommended to provide additional support
      for the development of Abby's literacy skills. One solution would be
      to enroll in Sharpen Reading to improve Abby's reading skills without
      delay. 
    </sharpen-dashboard-card>
  </div>
</div>`,
};
