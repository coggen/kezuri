/**
 * In general, we let the HTML describe the semantic hierarchy of text (e.g.
 * using `<p>` for paragraphs and `<h1>` for a primary heading) and we use
 * CSS, separately, to establish the visual hierarchy.
 */
export default {
  title: 'Utilities/Typography',
  component: 'Typography',
  tags: ['autodocs']
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
</div>`
}

/**
 * Utility classes for left, right, center, and left-justified text alignment.
 */
export const TextAlignment = {
  render: () => `
<div class="sharpen-text--left">Left-aligned text</div>
<div class="sharpen-text--right">Right-aligned text</div>
<div class="sharpen-text--center">Centered text</div>
<div class="sharpen-text--justify">Left-justified text. It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase. After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it. In the distance he saw the diminished dotted boat; and then a swift gleam of bubbling white water; and after that nothing more; whence it was concluded that the stricken whale must have indefinitely run away with his pursuers, as often happens. There was some apprehension, but no positive alarm, as yet. The recall signals were placed in the rigging; darkness came on; and forced to pick up her three far to windward boats—ere going in quest of the fourth one in the precisely opposite direction—the ship had not only been necessitated to leave that boat to its fate till near midnight, but, for the time, to increase her distance from it. But the rest of her crew being at last safe aboard, she crowded all sail—stunsail on stunsail—after the missing boat; kindling a fire in her try-pots for a beacon; and every other man aloft on the look-out. But though when she had thus sailed a sufficient distance to gain the presumed place of the absent ones when last seen; though she then paused to lower her spare boats to pull all around her; and not finding anything, had again dashed on; again paused, and lowered her boats; and though she had thus continued doing till daylight; yet not the least glimpse of the missing keel had been seen.</div>
`
}

/**
 * Headings come in different sizes.
 */
export const Headings = {
  render: () => `
<h1 class="sharpen-heading-md">Medium heading</h1>
<h1 class="sharpen-heading-xl">Extra large heading</h1>
<h1 class="sharpen-heading-2xl">2XL heading</h1>
<h1 class="sharpen-heading-2xl-sans">2XL heading, sans-serif</h1>
<h1 class="sharpen-heading-3xl">3XL heading</h1>
<h1 class="sharpen-heading-3xl--bordered">3XL heading with a bottom border</h1>
`
}

/**
 * Headings with icons will automatically have proper positioning.
 */
export const HeadingsWithIcons = {
  render: () => `
<h1 class="sharpen-heading-xl"><i class="sharpen-icon">agriculture</i>Holy cow!</h1>
<h1 class="sharpen-heading-2xl"><i class="sharpen-icon">agriculture</i>Holy cow!</h1>
`
}

/**
 * Use introductory text beneath a page or section heading to provide context
 * or instructions to the user.
 */
export const IntroductoryText = {
  render: () => `<h1 class="sharpen-heading-2xl">Learners</h1>
<p class="sharpen-text-intro">Sharpen offers your learners a selection of reading products. We invoice you monthly for any active subscriptions.</p>`
}

/**
 * Body text is sans-serif with modest line height for easier reading of multi-line text.
 */
export const BodyText = {
  render: () => `<div class="sharpen-text--body">It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase. After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it.</div>`
}

/**
 * The text container applies the same styles as `sharpen-text--body`, but also
 * limits the line-width to --max-width-for-reading (40rem). (Narrow columns
 * are easier to read.)
 */
export const TextContainer = {
  render: () => `<div class="sharpen-text-container">
  <p>It seemed that somewhat late on the afternoon of the day previous, while three of the stranger’s boats were engaged with a shoal of whales, which had led them some four or five miles from the ship; and while they were yet in swift chase to windward, the white hump and head of Moby Dick had suddenly loomed up out of the water, not very far to leeward; whereupon, the fourth rigged boat—a reserved one—had been instantly lowered in chase.</p>
  <p>After a keen sail before the wind, this fourth boat—the swiftest keeled of all—seemed to have succeeded in fastening—at least, as well as the man at the mast-head could tell anything about it.</p>
</div>`
}

/**
 * Use muted text to add supplementary content that should have less visual urgency.
 */
export const MutedText = {
  render: () => `<div class="sharpen-text--body">
  <div>This is the primary information.</div>
  <div class="sharpen-text--muted">This should be less in-your-face.</div>
</div>`
}

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
</div>`
}


/**
 * Show a list of name-value pairs with a definition list.
 */
export const DefinitionList = {
  render: () => `<dl class="sharpen-list">
  <dt>Date created</dt>
  <dd>Yesterday</dd>

  <dt>Date last Updated</dt>
  <dd>Today</dd>
</dl>`
}