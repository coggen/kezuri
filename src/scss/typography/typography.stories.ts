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
 * Headings come in different sizes.
 */
export const Headings = {
  render: () => `
<h1 class="sharpen-heading-xl">Holy cow!</h1>
<h1 class="sharpen-heading-2xl">Holy cow!</h1>
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
 * Use muted text to add supplementary content that should have less visual urgency.
 */
export const MutedText = {
  render: () => `<div style="font-family:var(--font-family-sans);">
  <div>This is the primary information.</div>
  <div class="sharpen-text-muted">This should be less in-your-face.</div>
</div>`
}
