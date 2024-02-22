export default {
  title: 'Pages/Onboarding Wizard'
};

export const RadioQuestion = {
  render: () => `
<div class="sharpen-wizard-container">

  <sharpen-wizard-header section="Learning Profile" current-step="1" total-steps="20"></sharpen-wizard-header>

  <form>

    <div class="question-content sharpen-text--body sharpen-mt-lg sharpen-mb-md">
      <p>What is your child’s current grade in school?</p>
    </div>
    
    <div class="sharpen-form-survey sharpen-form-survey-column">
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_1" />
        <label for="radio1_1">Younger than Kindergarten</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_2" />
        <label for="radio1_2">Kindergarten</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_3" />
        <label for="radio1_3">Grade 1</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_4" />
        <label for="radio1_4">Grade 2</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_5" />
        <label for="radio1_5">Grade 3</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_6" />
        <label for="radio1_6">Grade 4</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_7" />
        <label for="radio1_7">Grade 5</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="radio" name="radio1" id="radio1_8" />
        <label for="radio1_8">Grade 6 or older</label>
      </div>
    </div>

  </form>

</div>
`
}

export const CheckboxQuestion = {
  render: () => `
<div class="sharpen-wizard-container">

  <sharpen-wizard-header section="Learning Profile" current-step="2" total-steps="20" back-href="foo.html"></sharpen-wizard-header>

  <form>

    <div class="question-content sharpen-text--body sharpen-mt-lg sharpen-mb-md">
      <p>Has your child ever been formally diagnosed with a learning disability?</p>
      <p>Check all that apply.</p>
    </div>
    
    <div class="sharpen-form-survey sharpen-form-survey-column">
      <div class="sharpen-form-survey-option">
        <input type="checkbox" name="checkbox1" id="checkbox1_1" />
        <label for="checkbox1_1">Dyslexia</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="checkbox" name="checkbox1" id="checkbox1_2" />
        <label for="checkbox1_2">Dyscalculia</label>
      </div>
      <div class="sharpen-form-survey-option">
        <input type="checkbox" name="checkbox1" id="checkbox1_3" />
        <label for="checkbox1_3">Auditory disorder</label>
      </div>
    </div>

    <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large sharpen-mt-lg">Next</button>
  
  </form>

</div>
`
}

export const TestimonialMessage = {
  render: () => `
<div class="sharpen-wizard-container">
  <sharpen-wizard-header section="Learning Profile" current-step="5" total-steps="100" back-href="foo.html"></sharpen-wizard-header>
  <div class="sharpen-my-lg">
    <h1 class="sharpen-heading-md-sans">You are not alone</h1>
    <div class="row sharpen-my-md">
      <div class="col-7 sharpen-text--color-pine">
        "Seeing my son struggle with reading worried me. Sharpen really worked for us. He is now reading several years above grade level.” &mdash;Maggie
      </div>
      <div class="col-5">
        <img src="https://placehold.co/307x389" class="sharpen-img-responsive">
      </div>
    </div>
    <div class="sharpen-text--muted sharpen-text-xs sharpen-text--center">
      Sharpen families that adopt the right learning schedule improve 1 grade level in about 3 months. 
    </div>
  </div>
  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">Continue</button>
</div>
`
}

export const ResearchEvidence = {
  render: () => `
<div class="sharpen-wizard-container">
  <sharpen-wizard-header section="Learning Profile" current-step="15" total-steps="100" back-href="foo.html"></sharpen-wizard-header>
  <div class="sharpen-my-lg">
    <div class="sharpen-text--body">
      <p>Sharpen Reading is effective with all kinds of kids, including those with <strong>reading problems or dyslexia</strong>.</p>
      <p>We incorporate research from many disciplines:</p>
    </div>

    <table class="sharpen-table sharpen-table--headless sharpen-text-xs sharpen-text-height--compressed">
      <tbody>
        <tr>
          <td><img src="https://placehold.co/400x450" class="sharpen-img-responsive"></td>
          <td>
            Kids learn new words faster when they learn about the sounds that make up words.
            <span class="sharpen-text--color-gray-3">&mdash;Kilpatrick 2015, 2016; Ehri 2005, 2014; Scammaca et al 2007</span>
          </td>
        </tr>
        <tr>
          <td><img src="https://placehold.co/400x450" class="sharpen-img-responsive"></td>
          <td>
            High-quality, intense, one-on-one reading tutoring was more than twice as likely to catch a kid up to classmates by the next year.
        <span class="sharpen-text--color-gray-3">&mdash;Vellutino et al 1996</span>
          </td>
        </tr>
        <tr>
          <td><img src="https://placehold.co/400x450" class="sharpen-img-responsive"></td>
          <td>
            Sharpen improves how well kids identify and manipulate speech sounds in words, essential for quick and smooth reading.
        <span class="sharpen-text--color-gray-3">&mdash;Adams, 1990; Griffith & Olson 1992; Savage & Carless 2005</span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">Continue</button>
</div>
`
}

export const PracticeAndProgress = {
  render: () => `
<div class="sharpen-wizard-container">
  <sharpen-wizard-header section="Learning Profile" current-step="15" total-steps="100" back-href="foo.html"></sharpen-wizard-header>
  <div class="sharpen-my-lg">
    <h1 class="sharpen-heading-md-sans sharpen-mb-md">The more you practice,<br />
    the faster the progress</h1>
    <p>Sharpen Reading creates real results for your child that work within your schedule.</p>

    <table class="sharpen-table sharpen-table-practice sharpen-my-md">
      <thead>
        <tr>
          <th>Lessons<br />Per Week</th>
          <th>Grade-Level<br />Improvement In...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            4 lessons
            <div class="icon-set lessons-4">
              <i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i>
            </div>
          </td>
          <td>
            <i class="sharpen-icon filled">star</i> 3 months
            <div class="icon-set months">
              <i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            3 lessons
            <div class="icon-set lessons-3">
              <i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i>
            </div>
          </td>
          <td>
            4 months
            <div class="icon-set months">
              <i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            2 lessons
            <div class="icon-set lessons-2">
              <i class="sharpen-icon filled">book_3</i><i class="sharpen-icon filled">book_3</i>
            </div>
          </td>
          <td>
            6 months
            <div class="icon-set months">
              <i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i><i class="sharpen-icon">calendar_today</i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="sharpen-text--muted sharpen-text--center sharpen-text-xs sharpen-mb-lg">
      Based on 48 lessons, 30 minutes per lesson
    </div>
    <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">Continue</button>
  </div>
</div>
`
}

export const EmailQuestion = {
  render: () => `
<div class="sharpen-wizard-container">

  <sharpen-wizard-header section="Learning Profile" current-step="2" total-steps="20" back-href="foo.html"></sharpen-wizard-header>

  <form>

    <div class="question-content sharpen-text--body sharpen-mt-lg sharpen-mb-md">
      <p>Enter your email address to see when Sharpen Reading can get your child to achieve grade-level reading.</p>
    </div>

    <div class="sharpen-form-group sharpen-form-error">
      <input type="email" class="sharpen-form-control" placeholder="Email" value="blerg!" />
      <div class="sharpen-form-text sharpen-form-text--error">Enter a valid email address.</div>
    </div>

    <a href="estimate.html" class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large sharpen-mt-lg">See my result</a>

    <div class="sharpen-text--body sharpen-text-xs sharpen-text--muted sharpen-mt-lg">
      <p>Sharpen ensures the confidentiality of all information you provide. We will e-mail you a copy of your result.</p>
      <p>By clicking "See my result," you acknowledge that you have read, understood, and accepted the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a>.</p>
    </div>
  
  </form>

</div>
`
}

export const Estimate = {
  render: () => `
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<div class="sharpen-wizard-container sharpen-background--green">

  <div class="sharpen-text--center">
    <div class="sharpen-heading-sm sharpen-mb-0">We estimate your child will<br />
    improve by 1 grade level by</div>
    <h1 class="sharpen-heading-2xl-sans">February 28</h1>
    <canvas id="viz-estimate" class="sharpen-mt-md sharpen-mb-lg"></canvas>
  </div>

  <div class="sharpen-text--body">
    <p><strong>Great news!</strong> Based on Sharpen families like yours who do 3 lessons per week, we estimate your child will improve a full grade level by February 28.</p>
    <p>Next, answers some questions about your child’s skills so we can start Sharpen Reading at just the right level.</p>
  </div>

  <a href="course.html" class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large sharpen-mt-lg">Next</a>

</div>

<script>
  const ctx = document.getElementById('viz-estimate');

  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  }

  Chart.defaults.font.family = "Arial";

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months({ count: 4 }),
      datasets: [
        {
          label: 'Grade Level',
          data: [0,0.125,0.75,1],
          borderColor: '#31776C',
          backgroundColor: 'rgba(49, 119, 108, 0.2)',
          fill: 'start'
        }
      ]
    },
    options: {
      elements: {
        line: {
          tension: 0.4
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: false
        }
      }
    }
  })
</script>
`
}

/**
 * The image uses the `sharpen-img-responsive` class so that it can scale down
 * automatically to smaller screens.
 */
export const PlacementIntro = {
  render: () => `
<div class="sharpen-wizard-container">
  <sharpen-wizard-header section="Learning Profile" current-step="15" total-steps="100" back-href="foo.html"></sharpen-wizard-header>
  <div class="sharpen-my-lg sharpen-text--body">
    <div class="sharpen-text--center">
      <h1 class="sharpen-heading-md-sans sharpen-mb-md">Let's find your child's starting level</h1>
      <img src="https://placehold.co/350x200" class="sharpen-img-responsive sharpen-mb-md">
    </div>
    <p>Sharpen Reading includes over 30 kinds of live activities to make reading fun and effective, based on 20 years of experience.</p>
    <p>We select the best activities for your child based on their starting reading level: A, AA, B1, B2, C or D.</p>
  </div>
  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">Continue</button>
</div>
`
}

export const PlacementResult = {
  render: () => `
<div class="sharpen-wizard-container sharpen-background--green">

  <div class="sharpen-text--body sharpen-mb-lg">
    <div class="sharpen-text--center sharpen-mb-lg">
      <div class="sharpen-heading-sm-sans sharpen-heading--caps sharpen-text--color-evergreen sharpen-mb-sm">Jurickson has placed in</div>
      <img src="https://placehold.co/200x200" class="sharpen-img-responsive">
    </div>
  
    <p class="sharpen-text-md">Sharpen Reading's <strong>Level A Accelerated</strong> is aligned with kindergarten and beginning Grade 1 level material. </p>
  </div>

  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">See Jurickson's "AA" plan</button>

  <div class="sharpen-text--stronger sharpen-text--color-pine sharpen-mt-lg sharpen-text--center">"Sharpen brought me up in reading, and it feels really awesome to be beyond grade level now. I like reading a lot." &mdash;Jack, Sharpen Student</div>

</div>
`
}

export const PlacementExplainer = {
  render: () => `
<div class="sharpen-background--ivory sharpen-text-lg">
  <div class="sharpen-wizard-container sharpen-py-md">
    <a href="#"><i class="sharpen-icon">arrow_back</i></a>
  </div>
</div>
<div class="sharpen-background--green sharpen-text--color-pine sharpen-text-lg">
  <div class="sharpen-wizard-container">
    Level AA plan for Jurickson
  </div>
</div>
<div class="sharpen-wizard-container">
  <div class="sharpen-text--body">
    <img class="sharpen-img-responsive sharpen-mb-md" src="https://placehold.co/500x300" />
    <p>In Level AA, Jurickson will master letter-sound relationships: one-letter consonants, the so-called "short" vowels, and the two-letter combinations ll, sh, ch, th, and ck.</p>
  </div>

  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">Continue</button>
</div>
`
}

/**
 * - For best icon spacing in the heading, omit whitespace between icon & text.
 */
export const SuccessGuarantee = {
  render: () => `
<div class="sharpen-wizard-container">

  <h1 class="sharpen-heading-xl-sans sharpen-text--color-pine">
    <i class="sharpen-icon sharpen-text--color-orange">workspace_premium</i>Reading Success Guarantee
  </h1>

  <div class="sharpen-text--body sharpen-my-lg">
    <p>We believe Jurickson can learn to read at grade level or beyond &mdash; <em>and so should you!</em></p>
    <p>We are confident that Sharpen Reading can make that happen and offer a reading success guarantee:</p>
    <p><strong>If you complete a full level in X months and do not achieve your reading goal, contact us for a full refund.</strong></p>
  </div>

  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large">View Course</button>

</div>
`
}


export const PersonalizedCourse = {
  render: () => `
<div class="sharpen-text--inverse sharpen-text-lg">
  <div class="sharpen-wizard-container">
    Jurickson's<br />
    3-month personalized course
  </div>
</div>

<div class="sharpen-wizard-container">

  <sharpen-course-description icon="trophy">
    <li>Start at Sharpen <strong>Level B1</strong></li>
    <li>Easily read texts at a Grade 1 level by <strong>February 28</strong>.</li>
    <li>Build increased confidence in reading.</li>
  </sharpen-course-description>

  <h3 class="sharpen-heading-md sharpen-mt-lg">Course Highlights</h3>
  <ul class="sharpen-list">
    <li>Evidence-based curriculum</li>
    <li>Flexible, parent-led scripted lessons</li>
    <li>15&ndash;30 minute lessons, 3&ndash;4 times per week, on your schedule</li>
    <li>Over 35 fun digital activities</li>
  </ul>

  <table class="sharpen-table sharpen-table--pricing sharpen-mt-lg">
    <thead>
      <tr>
        <th>Price Today</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>14-day trial</td>
        <td>$0.00</td>
      </tr>
    </tbody>
  </table>

  <table class="sharpen-table sharpen-table--pricing sharpen-mt-md">
    <thead>
      <tr>
        <th>Price After Trial</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          3-month plan
          <div class="sharpen-text-xs sharpen-text--muted">$19.99/month</div>
        </td>
        <td>$59.97</td>
      </tr>
    </tbody>
  </table>

  <sharpen-alert class="sharpen-my-lg" type="success" icon="email">We'll bill you on December 7 unless you cancel before then. You'll receive a reminder email before your trial ends. Cancel your trial anytime.</sharpen-alert>

  <button class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large sharpen-mt-lg">Continue</button>

</div>
`
}
