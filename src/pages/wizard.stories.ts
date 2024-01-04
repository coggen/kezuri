export default {
  title: 'Pages/Onboarding Wizard'
};

export const RadioQuestion = {
  render: () => `
<div class="sharpen-wizard-container">

  <sharpen-wizard-header section="Learning Profile" current-step="1" total-steps="20"></sharpen-wizard-header>

  <form>

    <div class="question-content sharpen-text-container sharpen-mt-lg sharpen-mb-md">
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

    <div class="question-content sharpen-text-container sharpen-mt-lg sharpen-mb-md">
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

export const EmailQuestion = {
  render: () => `
<div class="sharpen-wizard-container">

  <sharpen-wizard-header section="Learning Profile" current-step="2" total-steps="20" back-href="foo.html"></sharpen-wizard-header>

  <form>

    <div class="question-content sharpen-text-container sharpen-mt-lg sharpen-mb-md">
      <p>Enter your email address to see when Sharpen Reading can get your child to achieve grade-level reading.</p>
    </div>

    <div class="sharpen-form-group sharpen-form-error">
      <input type="email" class="sharpen-form-control" placeholder="Email" value="blerg!" />
      <div class="sharpen-form-text sharpen-form-text--error">Enter a valid email address.</div>
    </div>

    <a href="estimate.html" class="sharpen-button sharpen-button--full-width sharpen-button--primary sharpen-button--large sharpen-mt-lg">See my result</a>

    <div class="sharpen-text-container sharpen-text-xs sharpen-text--muted sharpen-mt-lg">
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

  <div class="sharpen-text-container">
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
