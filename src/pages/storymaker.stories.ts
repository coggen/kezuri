export default {
  title: 'Pages/Storymaker',
  parameters: {
    layout: 'fullscreen'
  },
};

export const Welcome = {
  render: () => `<sharpen-simple-navigation background="sunrise" brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker sharpen-text--center">

  <h1 class="sharpen-mb-md sharpen-text-2xl">Welcome to Sharpen Storymaker!</h1>
  <p class="sharpen-mb-lg sharpen-text-xs">Sharpen Storymaker helps your child become a stronger reader with stories tailored to their reading level. Using a choose-your-own-adventure style, your child personalizes the story as it unfolds.</p>

  <sharpen-card border="gray" padding="large" class="sharpen-text--center">
    <p><strong>Answer a couple questions to set it up, then invite your child to build a story!</strong></p>
    <div class="form-group sharpen-mt-lg">
      <label class="sharpen-form-label">What is your child’s grade in school?</label>
      <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Kindergarten</a>
      <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Grade 1</a>
      <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Grade 2</a>
      <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Grade 3 or above</a>
    </div>
  </sharpen-card>

</div>`
}

export const SecondaryQuestion = {
  render: () => `<sharpen-simple-navigation background="sunrise" brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker sharpen-text--center">

  <div class="form-group">
    <label class="sharpen-form-label">When it comes to reading, my child...</label>
    <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Struggles</a>
    <a href="#" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width sharpen-mt-sm">Does not struggle</a>
  </div>

</div>`
}

export const Instructions = {
  render: () => `<sharpen-simple-navigation background="sunrise" brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker sharpen-text--center">

  <h1 class="sharpen-mb-lg">Almost ready...</h1>
  
  <ul class="sharpen-icon-list sharpen-text--left sharpen-mb-lg">
    <li>
      <i class="sharpen-icon sharpen-text--color-pine">volume_up</i>
      Sharpen Storymaker will guide your child by speaking any instructions out loud.
    </li>
    <li>
      <i class="sharpen-icon sharpen-text--color-pine">arrow_upward</i>
      At any time, touch the green logo at the top to get advice on improving your child’s reading.
    </li>
  </ul>

  <a href="character.html" class="sharpen-button sharpen-button--primary sharpen-button--small sharpen-button--full-width">Start making stories!</a>

  </div>`
}

export const CharacterChoice = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

  <div class="sharpen-wizard-container storymaker">

    <div id="page-instruction" class="sharpen-text--center sharpen-text-xl sharpen-mb-lg">
      Let’s make a story!<br />
      Pick a character.
    </div>

    <sharpen-choice-grid>
      <a href="#">
        <sharpen-card border="none" padding="medium">
          <img src="https://placehold.co/800" />
          <div class="title">bunny</div>
        </sharpen-card>
      </a>
      <a href="#">
        <sharpen-card border="none" padding="medium">
          <img src="https://placehold.co/800" />
          <div class="title">fox</div>
        </sharpen-card>
      </a>
      <a href="#">
        <sharpen-card border="none" padding="medium">
          <img src="https://placehold.co/800" />
          <div class="title">lion</div>
        </sharpen-card>
      </a>
      <a href="#">
        <sharpen-card border="none" padding="medium">
          <img src="https://placehold.co/800" />
          <div class="title">truck</div>
        </sharpen-card>
      </a>
    </sharpen-choice-grid>

  </div>`
}

export const SettingChoice = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

  <div id="page-instruction" class="sharpen-text--center sharpen-text-xl sharpen-mb-lg">
    Pick another thing that should be in your story.
  </div>

  <sharpen-choice-grid>
    <a href="#" class="hide">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/1000x650" />
        <div class="title">forest</div>
      </sharpen-card>
    </a>
    <a href="#" class="hide">
      <sharpen-card border="none" padding="medium">
        <img src="https://placehold.co/1000x650" />
        <div class="title">village</div>
      </sharpen-card>
    </a>
  </sharpen-choice-grid>

</div>`
}

export const StoryGeneration = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

  <sharpen-story-header>
    <img src="https://placehold.co/800" alt="Fox">
  </sharpen-story-header>

  <div id="page-instruction" class="sharpen-text--center sharpen-text-xl sharpen-mb-lg">
    OK! Let me build a story about a fox in a forest.
  </div>

  <sharpen-waiting-bar></sharpen-waiting-bar>
  
  <div class="progress progress-striped">
    <div class="progress-bar">
    </div>                       
  </div>
  
</div>`
}

export const ReadSentence = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

<sharpen-story-page content-mode="sentence" background-src="https://placehold.co/1000x650?text=Background" character-src="https://placehold.co/800/orange/white?text=Character">
  Sam the fox sat on a log.
</sharpen-story-page>

  <a id="story-advance" class="sharpen-button sharpen-button--primary sharpen-button--large sharpen-button--full-width sharpen-mt-lg" href="choice.html">
    <i class="sharpen-icon sharpen-text-4xl">arrow_forward</i>
  </a>

</div>`
}

export const ReadParagraph = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

<sharpen-story-page content-mode="paragraph" background-src="https://placehold.co/1000x650?text=Background">
  I get stuck with Ricky the morning after the big storm. A tree branch the size of the Loch Ness Monster blew in through his bedroom window, so his parents need him out of the way while they get everything fixed up.
</sharpen-story-page>

  <a id="story-advance" class="sharpen-button sharpen-button--primary sharpen-button--large sharpen-button--full-width sharpen-mt-lg" href="choice.html">
    <i class="sharpen-icon sharpen-text-4xl">arrow_forward</i>
  </a>

</div>`
}

export const PlotChoice = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

  <div class="sharpen-wizard-container storymaker">

    <sharpen-story-header>
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
    </sharpen-choice-grid>
    
  </div>`
}

export const Celebration = {
  render: () => `<sharpen-simple-navigation brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

  <div id="page-instruction" class="sharpen-text--center sharpen-text-xl sharpen-mb-lg">
    Good job with your reading! Did you like that story?
    Tap the smile or the frown.
  </div>

  <div class="story-reactions">
    <a id="reaction-1" class="hide" href="#"><i class="sharpen-icon">sentiment_satisfied</i></a>
    <a id="reaction-2" class="hide" href="#"><i class="sharpen-icon">sentiment_dissatisfied</i></a>
  </div>
  
</div>`
}

export const ParentsLearnMore = {
  render: () => `<sharpen-simple-navigation background="sunrise" brand-href="#"></sharpen-simple-navigation>

<div class="sharpen-wizard-container storymaker">

  <p class="sharpen-text-lg sharpen-mb-lg">Using Sharpen Storymaker, your child has been reading stories <strong>at a beginning Grade 1 level</strong>.</p>

  <sharpen-card border="gray" padding="large">
    <p class="sharpen-mb-lg">Boost your child’s reading skills by a grade level or more with Sharpen’s proven curriculum, available in two forms:</p>

    <a href="https://app.sharpen.com/signup">
      <sharpen-card border="none" padding="medium" class="product-option sharpen-mb-md sharpen-text--center">
        <h2 class="sharpen-text-lg"><strong>Sharpen Reading</strong></h2>
        <div class="sharpen-text-xs">Parent-led learning @ $25/month</div>
      </sharpen-card>
    </a>

    <a href="https://www.sharpen.com/tutoring">
      <sharpen-card border="none" padding="medium" class="product-option sharpen-text--center">
        <h2 class="sharpen-text-lg"><strong>Sharpen Tutoring</strong></h2>
        <div class="sharpen-text-xs">Certified online tutors as low as $55/session</div>
      </sharpen-card>
    </a>

  </sharpen-card>

  <div class="sharpen-mt-lg sharpen-text--center">
    <a href="character.html">or make more stories</a>
  </div>

</div>`
}