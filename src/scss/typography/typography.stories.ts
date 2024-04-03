/**
 * In general, we let the HTML describe the semantic hierarchy of text (e.g.
 * using `<p>` for paragraphs and `<h1>` for a primary heading) and we use
 * CSS, separately, to establish the visual hierarchy.
 */
export default {
  title: 'Utilities/Typography',
  component: 'Typography',
  tags: ['autodocs'],
};

/**
 * Utility classes for text size are consistent with the font size tokens.
 */
export const TextSizes = {
  render: () => `
<div style="font-family:var(--font-family-sans);">
  <div class="sharpen-text-xs">See Jane run.</div>
  <div class="sharpen-text-sm">See Jane run.</div>
  <div class="sharpen-text-md">See Jane run.</div>
  <div class="sharpen-text-lg">See Jane run.</div>
  <div class="sharpen-text-xl">See Jane run.</div>
  <div class="sharpen-text-2xl">See Jane run.</div>
  <div class="sharpen-text-3xl">See Jane run.</div>
  <div class="sharpen-text-4xl">See Jane run.</div>
  <div class="sharpen-text-5xl">See Jane run.</div>
</div>`,
};

export const TextColors = {
  render: () => `
<div class="sharpen-text--color-evergreen">sharpen-text--color-evergreen</div>
<div class="sharpen-text--color-pine">sharpen-text--color-pine</div>
<div class="sharpen-text--color-mint">sharpen-text--color-mint</div>
<div class="sharpen-text--color-sky">sharpen-text--color-sky</div>
<div class="sharpen-text--color-sunrise">sharpen-text--color-sunrise</div>
<div class="sharpen-text--color-ivory">sharpen-text--color-ivory</div>
<div class="sharpen-text--color-putty">sharpen-text--color-putty</div>
<div class="sharpen-text--color-black">sharpen-text--color-black</div>
<div class="sharpen-text--color-gray-1">sharpen-text--color-gray-1</div>
<div class="sharpen-text--color-gray-2">sharpen-text--color-gray-2</div>
<div class="sharpen-text--color-gray-3">sharpen-text--color-gray-3</div>
<div class="sharpen-text--color-gray-4">sharpen-text--color-gray-4</div>
<div class="sharpen-text--color-gray-5">sharpen-text--color-gray-5</div>
<div class="sharpen-text--color-white">sharpen-text--color-white</div>
<div class="sharpen-text--color-red">sharpen-text--color-red</div>
<div class="sharpen-text--color-dark-red">sharpen-text--color-dark-red</div>
<div class="sharpen-text--color-light-red">sharpen-text--color-light-red</div>
<div class="sharpen-text--color-orange">sharpen-text--color-orange</div>
<div class="sharpen-text--color-dark-orange">sharpen-text--color-dark-orange</div>
<div class="sharpen-text--color-light-orange">sharpen-text--color-light-orange</div>
<div class="sharpen-text--color-green">sharpen-text--color-green</div>
<div class="sharpen-text--color-dark-green">sharpen-text--color-dark-green</div>
<div class="sharpen-text--color-light-green">sharpen-text--color-light-green</div>
`,
};

/**
 * Utility classes for left, right, center, and left-justified text alignment.
 */
export const TextAlignment = {
  render: () => `
<div class="sharpen-text--left">Left-aligned text</div>
<div class="sharpen-text--right">Right-aligned text</div>
<div class="sharpen-text--center">Centered text</div>
<div class="sharpen-text--justify">Left-justified text. It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase. After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it. In the distance he saw the diminished dotted boat; and then a swift gleam of bubbling white water; and after that nothing more; whence it was concluded that the stricken whale must have indefinitely run away with his pursuers, as often happens. There was some apprehension, but no positive alarm, as yet. The recall signals were placed in the rigging; darkness came on; and forced to pick up her three far to windward boats—ere going in quest of the fourth one in the precisely opposite direction—the ship had not only been necessitated to leave that boat to its fate till near midnight, but, for the time, to increase her distance from it. But the rest of her crew being at last safe aboard, she crowded all sail—stunsail on stunsail—after the missing boat; kindling a fire in her try-pots for a beacon; and every other man aloft on the look-out. But though when she had thus sailed a sufficient distance to gain the presumed place of the absent ones when last seen; though she then paused to lower her spare boats to pull all around her; and not finding anything, had again dashed on; again paused, and lowered her boats; and though she had thus continued doing till daylight; yet not the least glimpse of the missing keel had been seen.</div>
`,
};

/**
 * Text strength in Kezuri corresponds with boldness. Stronger is semi-bold,
 * strongest is bold.
 */
export const TextStrength = {
  render: () => `
<div>Normal text</div>
<div class="sharpen-text--stronger">Text with stronger emphasis</div>
<div class="sharpen-text--strongest">Text with strongest emphasis</div>
`,
};

/**
 * Headings range in size from `md` to `5xl`, and can be either serif (default) or `sans`.
 */
export const Headings = {
  render: () => `
<h1 class="sharpen-heading-sm">Heading, small</h1>
<h1 class="sharpen-heading-md">Heading, medium</h1>
<h1 class="sharpen-heading-lg">Heading, large</h1>
<h1 class="sharpen-heading-2xl">Heading, 2xl</h1>
<h1 class="sharpen-heading-3xl">Heading, 3xl</h1>
<h1 class="sharpen-heading-4xl">Heading, 4xl</h1>
<h1 class="sharpen-heading-5xl">Heading, 5xl</h1>

<h1 class="sharpen-heading-sm-sans">Heading, sans-serif, small</h1>
<h1 class="sharpen-heading-md-sans">Heading, sans-serif, medium</h1>
<h1 class="sharpen-heading-lg-sans">Heading, sans-serif, large</h1>
<h1 class="sharpen-heading-2xl-sans">Heading, sans-serif, 2xl</h1>
<h1 class="sharpen-heading-3xl-sans">Heading, sans-serif, 3xl</h1>
<h1 class="sharpen-heading-4xl-sans">Heading, sans-serif, 4xl</h1>
<h1 class="sharpen-heading-5xl-sans">Heading, sans-serif, 5xl</h1>
`,
};

/**
 * Add a bottom border to your heading with `sharpen-heading--bordered`
 */
export const HeadingsWithBottomBorder = {
  render: () => `
<h1 class="sharpen-heading-sm sharpen-heading--bordered">Heading, small</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-md sharpen-heading--bordered">Heading, medium</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-lg sharpen-heading--bordered">Heading, large</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-2xl sharpen-heading--bordered">Heading, 2xl</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-3xl sharpen-heading--bordered">Heading, 3xl</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-4xl sharpen-heading--bordered">Heading, 4xl</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>

<h1 class="sharpen-heading-5xl sharpen-heading--bordered">Heading, 5xl</h1>
<p class="sharpen-text--body sharpen-mb-lg">Lorem ipsum dolor</p>
`,
};

/**
 * Headings with icons will automatically have proper positioning.
 */
export const HeadingsWithIcons = {
  render: () => `
<h1 class="sharpen-heading-xl"><i class="sharpen-icon">agriculture</i>Holy cow!</h1>
<h1 class="sharpen-heading-2xl"><i class="sharpen-icon">agriculture</i>Holy cow!</h1>
`,
};

/**
 * Give your headings a bit more impact by displaying them in all-caps.
 */
export const HeadingsInCaps = {
  render: () => `
<div class="sharpen-text--center">
  <div class="sharpen-heading-sm-sans sharpen-heading--caps sharpen-mb-sm">Jurickson has placed in</div>
  <img src="https://placehold.co/100x100">
</div>
`,
};

/**
 * Use introductory text beneath a page or section heading to provide context
 * or instructions to the user.
 */
export const IntroductoryText = {
  render: () => `<h1 class="sharpen-heading-2xl">Learners</h1>
<p class="sharpen-text-intro">Sharpen offers your learners a selection of reading products. We invoice you monthly for any active subscriptions.</p>`,
};

/**
 * Body text is sans-serif with modest line height for easier reading of multi-line text.
 */
export const BodyText = {
  render: () =>
    `<div class="sharpen-text--body">It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase. After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it.</div>`,
};

/**
 * The text container applies the same styles as `sharpen-text--body`, but also
 * limits the line-width to --max-width-for-reading (40rem). (Narrow columns
 * are easier to read.)
 */
export const TextContainer = {
  render: () => `<div class="sharpen-text-container">
  <p>It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase.</p>
  <p>After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it.</p>
</div>`,
};

/**
 * Use muted text to add supplementary content that should have less visual urgency.
 */
export const MutedText = {
  render: () => `<div class="sharpen-text--body">
  <div>This is the primary information.</div>
  <div class="sharpen-text--muted">This should be less in-your-face.</div>
</div>`,
};

/**
 * Use inverse text to put white text on a pine background, like in this example
 * from the end of our onboarding wizard.
 */
export const InverseText = {
  render: () => `<div class="sharpen-text--inverse sharpen-text-lg">
  <div class="sharpen-wizard-container">
    Jurickson's<br />
    3-month personalized course
  </div>
</div>`,
};

/**
 * Add the `sharpen-list` class to an `ol` or `ul` to get appropriate list-item
 * spacing. Margins between lists is your responsibility, unless you lists are
 * within a `sharpen-text-container`.
 */
export const Lists = {
  render: () => `<div class="sharpen-text-container">
  <ol class="sharpen-list">
    <li>First in my list</li>
    <li>Second in my list</li>
    <li>Last in my list</li>
  </ol>

  <ul class="sharpen-list">
    <li>One bulleted item</li>
    <li>Two bulleted items</li>
    <li>Three bulleted items</li>
  </ul>
</div>`,
};

/**
 * Icon lists use `sharpen-icon` elements or images as bullet points. Use text
 * color utility classes to change the color of an icon. Images are sized at
 * 24px square to ensure proper alignment with each other and proper
 * line-height alignment with the text.
 *
 * Given the image size, list items have more generous spacing.
 */
export const IconLists = {
  render: () => `<div class="sharpen-text-container">
  <ul class="sharpen-icon-list sharpen-mb-xl">
    <li><i class="sharpen-icon sharpen-text--color-pine">check_circle</i> This item is ok! Donec pulvinar libero sed sollicitudin ultricies. Proin accumsan lectus augue (<i class="sharpen-icon">pets</i>) at maximus neque elementum quis. Suspendisse metus risus, luctus egestas odio a, imperdiet ultrices ipsum. Nulla purus massa, aliquet et mi quis, tempus tempor erat. In feugiat sollicitudin placerat.</li>
    <li><i class="sharpen-icon sharpen-text--color-dark-red">cancel</i> This item is not ok! Nulla purus massa, aliquet et mi quis, tempus tempor erat. In feugiat sollicitudin placerat.</li>
    <li><i class="sharpen-icon">help</i> This item is uncertain.</li>
  </ul>

  <p>Suspendisse metus risus, luctus egestas odio a, imperdiet ultrices ipsum. Nulla purus massa, aliquet et mi quis, tempus tempor erat. In feugiat sollicitudin placerat.</p>
  <ul class="sharpen-icon-list">
    <li>
      <img src="/assets/images/icon-decoding@2x.png">
      <h4 class="sharpen-heading-sm-sans">Phonological Awareness</h4>
      <p class="sharpen-text--muted">Assessment based on past reading history during parent's school-aged reading experiences.</p>
    </li>
    <li>
      <img src="/assets/images/icon-memory@2x.png">
      <h4 class="sharpen-heading-sm-sans">Phonological Memory</h4>
      <p class="sharpen-text--muted">Assessment based on past reading history during parent's school-aged reading experiences.</p>
    </li>
    <li>
      <img src="/assets/images/icon-decoding@2x.png">
      <h4 class="sharpen-heading-sm-sans">Rapid Naming</h4>
      <p class="sharpen-text--muted">Assessment based on past reading history during parent's school-aged reading experiences.</p>
    </li>
  </ul>
</div>
`,
};

/**
 * Show a list of name-value pairs with a definition list.
 */
export const DefinitionList = {
  render: () => `<dl class="sharpen-list">
  <dt>Date created</dt>
  <dd>Yesterday</dd>

  <dt>Date last Updated</dt>
  <dd>Today</dd>
</dl>`,
};
