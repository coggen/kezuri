import { newSpecPage, newE2EPage } from '@stencil/core/testing';
import { SharpenJourneyLevel } from './sharpen-journey-level';

it('should render current level with arrow icon, full content, open by default', async () => {
  const page = await newSpecPage({
    components: [SharpenJourneyLevel],
    html: `<sharpen-journey-level name="Level A" status="current" units="12" current-unit="2" unit-progress="20">Level A Description</sharpen-journey-level>`,
  });
  
  // Arrow icon
  expect(page.root.querySelector('.level-name .sharpen-icon'))
    .toEqualHtml(`<i class="filled sharpen-icon">arrow_circle_right</i>`);

  // Description
  expect(page.root.querySelector('.level-description'))
    .toEqualHtml(`<div class="level-description">Level A Description</div>`);
  
  // Content panel is open by default
  expect(page.root.querySelector('.level-content').classList.contains('open'))
    .toBeTruthy();

  // Content panel includes unit count
  expect(page.root.querySelector('.level-unit-count')).not.toBeNull();

  // Content panel includes unit count
  expect(page.root.querySelector('.level-units')).not.toBeNull();

  // Content panel includes unit progress
  expect(page.root.querySelector('.unit-progress')).not.toBeNull();
});

it('should render unstarted level with circle icon, minimal content, closed by default', async () => {
  const page = await newSpecPage({
    components: [SharpenJourneyLevel],
    html: `<sharpen-journey-level name="Level A" status="unstarted" units="12" current-unit="2" unit-progress="20">Level A Description</sharpen-journey-level>`,
  });
  
  // Circle icon
  expect(page.root.querySelector('.level-name .sharpen-icon'))
    .toEqualHtml(`<i class="filled sharpen-icon">circle</i>`);

  // Description
  expect(page.root.querySelector('.level-description'))
    .toEqualHtml(`<div class="level-description">Level A Description</div>`);
  
  // Content panel is closed by default
  expect(page.root.querySelector('.level-content').classList.contains('open'))
    .toBeFalsy();

  // Content panel does not include unit count
  expect(page.root.querySelector('.level-unit-count')).toBeNull();

  // Content panel does not include unit count
  expect(page.root.querySelector('.level-units')).toBeNull();

  // Content panel does not include unit progress
  expect(page.root.querySelector('.unit-progress')).toBeNull();
});

it('should render completed level with circle icon, minimal content, closed by default', async () => {
  const page = await newSpecPage({
    components: [SharpenJourneyLevel],
    html: `<sharpen-journey-level name="Level A" status="completed" units="12" current-unit="2" unit-progress="20">Level A Description</sharpen-journey-level>`,
  });
  
  // Check circle icon
  expect(page.root.querySelector('.level-name .sharpen-icon'))
    .toEqualHtml(`<i class="filled sharpen-icon">check_circle</i>`);

  // Description
  expect(page.root.querySelector('.level-description'))
    .toEqualHtml(`<div class="level-description">Level A Description</div>`);
  
  // Content panel is closed by default
  expect(page.root.querySelector('.level-content').classList.contains('open'))
    .toBeFalsy();

  // Content panel does not include unit count
  expect(page.root.querySelector('.level-unit-count')).toBeNull();

  // Content panel does not include unit count
  expect(page.root.querySelector('.level-units')).toBeNull();

  // Content panel does not include unit progress
  expect(page.root.querySelector('.unit-progress')).toBeNull();
});

it('should toggle the level content when the level name is clicked', async () => {
  const page = await newE2EPage();
  await page.setContent(`<sharpen-journey-level name="Level A" status="unstarted">Level A Description</sharpen-journey-level>`);
  
  // Content is closed
  expect(await page.find('.level-content')).not.toHaveClass('open');

  // Click name once
  await page.locator('.level-name button').click();
  await page.waitForChanges();
  
  // Content is open
  expect(await page.find('.level-content')).toHaveClass('open');

  // Click name again
  await page.locator('.level-name button').click();
  await page.waitForChanges();

  // Content is closed again
  expect(await page.find('.level-content')).not.toHaveClass('open');
});
