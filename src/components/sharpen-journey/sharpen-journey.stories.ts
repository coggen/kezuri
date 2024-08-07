/**
 * The **journey** describes a curriculum's levels and displays a
 * learner's progress through each level's units and lessons.
 */
export default {
  title: 'Organisms/Journey',
  tags: ['autodocs'],
  render: () => `<sharpen-card border="none" padding="medium">
  <dl class="sharpen-list sharpen-mb-md">
    <dt>Abby's reading journey</dt>
  </dl>
  <sharpen-journey>
    <sharpen-journey-level name="Level A" status="current" units="12" current-unit="2" unit-progress="20">
      In Level A, Learners master the one-letter consonants, the so-called "short vowels," and the two-letter consonant spellings ll, sh, ch, th, and ck. Most of the words explored at this level consist of just three sounds (consonant-vowel-consonant).
    </sharpen-journey-level>
    <sharpen-journey-level name="Level B1" status="unstarted" units="12">
      In Level B1, learners study letter combinations such as oa, ea, ou, and igh. They also work with more words with two consonants at the beginning like 'grow,' and 'blue,' or two consonants at the end like 'first,' and 'point.' Learners at this level also start working with two-syllable words and read more extended and complicated text.
    </sharpen-journey-level>
    <sharpen-journey-level name="Level B2" status="unstarted" units="12">
      In Level B2, learners study advanced letter-sound combinations, continue to practice reading two-syllable words, and start analyzing and reading three- and four-syllable words.
    </sharpen-journey-level>
  </sharpen-journey>
</sharpen-card>`
};

export const LevelInProgress = {};

/**
 * A level within the journey may be `unstarted`, `current`, or `completed`.
 * By default, the level with `current` status will be rendered open. The user
 * may click other level titles to expand/collapse their descriptions.
 */
export const LevelStatuses = {
  render: () => `<sharpen-card border="none" padding="medium">
  <sharpen-journey>
    <sharpen-journey-level name="Level A" status="completed">Description</sharpen-journey-level>
    <sharpen-journey-level name="Level B1" status="current" units="12" current-unit="1" unit-progress="0">Description</sharpen-journey-level>
    <sharpen-journey-level name="Level B1" status="unstarted">Description</sharpen-journey-level>
  </sharpen-journey>
</sharpen-card>`
};

/**
 * As the learner completes units within the level, the visualization changes.
 * Completed units appear as green check circles, the current unit is highlighted
 * in mint, and upcoming units remain in light gray.
 * 
 * The progress bar shows the percent of lessons that the learner has completed
 * within the current unit.
 */
export const UnitProgress = {
  render: () => `<sharpen-card border="none" padding="medium">
  <sharpen-journey>
    <sharpen-journey-level name="Level B1" status="current" units="12" current-unit="7" unit-progress="50">Description</sharpen-journey-level>
  </sharpen-journey>
</sharpen-card>`
};

/**
 * When the user adds a new learner and the dashboard displays a reading
 * journey card before the learner's placement has been calculated, we
 * should not show the journey component yet.
 */
export const BeforePlacement = {
  render: () => `<sharpen-card border="none" padding="medium">
  <dl class="sharpen-list">
    <dt>Abby's reading journey</dt>
    <dd><span class="sharpen-text-lg">To be determined</span></dd>
  </dl>
</sharpen-card>`
};

export const AllLevelsComplete = {
  render: () => `<sharpen-card border="none" padding="medium">
  <dl class="sharpen-list sharpen-mb-md">
    <dt>Abby's reading journey</dt>
  </dl>
  <sharpen-journey>
    <sharpen-journey-level name="Level A" status="completed">
      In Level A, Learners master the one-letter consonants, the so-called "short vowels," and the two-letter consonant spellings ll, sh, ch, th, and ck. Most of the words explored at this level consist of just three sounds (consonant-vowel-consonant).
    </sharpen-journey-level>
    <sharpen-journey-level name="Level B1" status="completed">
      In Level B1, learners study letter combinations such as oa, ea, ou, and igh. They also work with more words with two consonants at the beginning like 'grow,' and 'blue,' or two consonants at the end like 'first,' and 'point.' Learners at this level also start working with two-syllable words and read more extended and complicated text.
    </sharpen-journey-level>
    <sharpen-journey-level name="Level B2" status="completed">
      In Level B2, learners study advanced letter-sound combinations, continue to practice reading two-syllable words, and start analyzing and reading three- and four-syllable words.
    </sharpen-journey-level>
  </sharpen-journey>
</sharpen-card>`
};