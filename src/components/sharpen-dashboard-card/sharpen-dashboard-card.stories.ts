/**
 * A **dashboard card** highlights next steps and important updates for a user
 * within a learner record.
 */
export default {
  title: 'Organisms/Dashboard Card',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      description: "Main heading, appears larger, in green, below the image."
    },
    subheading: {
      description: "Smaller, appears in gray atop the card. Typically a specific product name."
    },
    primaryLink: {
      description: "A link that the primary button should direct to."
    },
    primaryLinkText: {
      description: "Text to be displayed within the primary button."
    },
    secondaryLink: {
      description: "A link to additional information that appears in the upper right. Use sparingly."
    },
    secondaryLinkText: {
      description: "The text to display for the secondary link."
    },
    imgSrc: {
      description: "URL to the image that should be featured in this card."
    },
    description: {
      description: "Explanatory content to display beneath the heading."
    }
  },
  render: (args) => `<sharpen-dashboard-card
    heading="${args.heading}"
    subheading="${args.subheading}"
    primary-link="${args.primaryLink}"
    primary-link-text="${args.primaryLinkText}"
    secondary-link="${args.secondaryLink}"
    secondary-link-text="${args.secondaryLinkText}"
    img-src="${args.imgSrc}">
  ${args.description}
</sharpen-dashboard-card>`
};

export const PlacementExample = {
  args: {
    heading: "Placement: Level A",
    subheading: "Sharpen Reading",
    primaryLink: "#",
    primaryLinkText: "Start Sharpen Reading",
    secondaryLink: "#",
    secondaryLinkText: "View Details",
    imgSrc: "placement-level-a@2x.png",
    description: "Congrats on completing the placement assessment for Abby! Abby's reading journey is just beginning. Dive into our exclusive reading program below!"
  }
};

export const SpellingExample = {
  args: {
    heading: "Start Spelling",
    subheading: "Sharpen Spelling",
    primaryLink: "#",
    primaryLinkText: "Start Sharpen Spelling",
    secondaryLink: "#",
    secondaryLinkText: "View Details",
    imgSrc: "spelling@2x.png",
    description: "Abby can become a stronger reader by developing more spelling skills &mdash; recommended after Reading Level B1"
  }
};