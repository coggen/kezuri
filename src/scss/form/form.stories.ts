export default {
  title: 'Utilities/Form'
};

export const Example = {
  render: () => `
<sharpen-card border="gray" padding="large">
  <div class="sharpen-form-group">
    <label class="sharpen-form-label">E-mail</label>
    <input type="email" class="sharpen-form-control" />
  </div>
  <div class="sharpen-form-group">
    <label class="sharpen-form-label">Password</label>
    <input type="password" class="sharpen-form-control" placeholder="Minimum 8 characters..." />
  </div>
  <div class="sharpen-form-group">
    <div class="sharpen-form-check">
      <input type="checkbox" class="sharpen-form-check-input" name="example_checkbox" id="example_checkbox1" />
      <label class="sharpen-form-label" for="example_checkbox1">Remember me</label>
    </div>
  </div>
  <div class="sharpen-form-group">
    <input type="submit" class="sharpen-button sharpen-button--primary sharpen-button--small" value="Submit" />
  </div>
</sharpen-card>
`
}

export const Text = {
  name: 'Input: Text',
  render: () => `<label class="sharpen-form-label" for="input1">Text input with placeholder text</label>
<input type="text" class="sharpen-form-control" id="input1" laceholder="Enter your value..." />`
};

export const Textarea = {
  name: 'Input: Textarea',
  render: () => `<label class="sharpen-form-label" for="input2">Book excerpt</label>
<textarea class="sharpen-form-control" id="input2">Once more. Say you are in the country; in some high land of lakes. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it.</textarea>`
};

export const Select = {
  name: 'Input: Select',
  render: () => `<label class="sharpen-form-label" for="select1">Favorite shawarma topping</label>
<select class="sharpen-form-control" id="select1">
  <option>Hummus</option>
  <option>Tahini</option>
  <option>Amba</option>
  <option>Toum</option>
</select>`
};

export const Radio = {
  name: 'Input: Radio',
  render: () => `<div class="sharpen-form-check">
  <input type="radio" class="sharpen-form-check-input" name="radio1" id="radio1_1" />
  <label class="sharpen-form-label" for="radio1_1">Chocolate</label>
</div>
<div class="sharpen-form-check">
  <input type="radio" class="sharpen-form-check-input" name="radio1" id="radio1_2" />
  <label class="sharpen-form-label" for="radio1_2">Strawberry</label>
</div>
<div class="sharpen-form-check">
  <input type="radio" class="sharpen-form-check-input" name="radio1" id="radio1_3" />
  <label class="sharpen-form-label" for="radio1_3">
    Other
    <div class="sharpen-text-xs">E-mail us with the flavor you desire.</div>
  </label>
</div>`
};

export const Checkbox = {
  name: 'Input: Checkbox',
  render: () => `<div class="sharpen-form-check">
  <input type="checkbox" class="sharpen-form-check-input" name="checkbox1" id="checkbox1_1" />
  <label class="sharpen-form-label" for="checkbox1_1">Chocolate</label>
</div>
<div class="sharpen-form-check">
  <input type="checkbox" class="sharpen-form-check-input" name="checkbox1" id="checkbox1_2" />
  <label class="sharpen-form-label" for="checkbox1_2">Strawberry</label>
</div>
<div class="sharpen-form-check">
  <input type="checkbox" class="sharpen-form-check-input" name="checkbox1" id="checkbox1_3" />
  <label class="sharpen-form-label" for="checkbox1_3">
    Other
    <div class="sharpen-text-xs">E-mail us with the flavor you desire.</div>
  </label>
</div>`
};

export const Disabled = {
  name: 'Disabled Fields',
  render: () => `<div class="sharpen-form-group">
  <input disabled type="text" class="sharpen-form-control" value="Disabled input field content" />
</div>

<div class="sharpen-form-group">
  <textarea disabled class="sharpen-form-control">Disabled textarea field content</textarea>
</div>

<div class="sharpen-form-group">
  <select disabled class="sharpen-form-control">
    <option>Disabled option</option>
    <option>Disabled second option</option>
  </select>
</div>

<div class="sharpen-form-group">
  <div class="sharpen-form-check">
    <input disabled type="radio" class="sharpen-form-check-input" name="radio2" id="radio2_1" checked />
    <label class="sharpen-form-label" for="radio2_1">Chocolate</label>
  </div>
  <div class="sharpen-form-check">
    <input disabled type="radio" class="sharpen-form-check-input" name="radio2" id="radio2_2" />
    <label class="sharpen-form-label" for="radio2_2">Strawberry</label>
  </div>
</div>

<div class="sharpen-form-group">
  <div class="sharpen-form-check">
    <input disabled type="checkbox" class="sharpen-form-check-input" name="checkbox2" id="checkbox2_1" checked />
    <label class="sharpen-form-label" for="checkbox2_1">Chocolate</label>
  </div>
  <div class="sharpen-form-check">
    <input disabled type="checkbox" class="sharpen-form-check-input" name="checkbox" id="checkbox2_2" />
    <label class="sharpen-form-label" for="checkbox2_2">Strawberry</label>
  </div>
</div>`
};

export const Readonly = {
  name: 'Read-only Fields',
  render: () => `<div class="sharpen-form-group">
  <input readonly type="text" class="sharpen-form-control" value="Read-only input field content" />
</div>`
}


export const FieldInstructions = {
  render: () => `<label class="sharpen-form-label" for="input3">Field label</label>
<input type="text" class="sharpen-form-control" id="input3" />
<div class="sharpen-form-text">Special instructions for this field</div>`
};

export const FormGroups = {
  name: 'Field groups',
  render: () => `<div class="sharpen-form-group">
  <label class="sharpen-form-label" for="input4">Input label</label>
  <input type="text" class="sharpen-form-control" id="input4" placeholder="Enter your value..." />
</div>
<div class="sharpen-form-group">
  <label class="sharpen-form-label" for="input5">Input label</label>
  <input type="text" class="sharpen-form-control" id="input5" placeholder="Enter your value..." />
</div>`
};

export const FormError = {
  name: 'Field errors',
  render: () => `<div class="sharpen-form-group sharpen-form-error">
  <label class="sharpen-form-label" for="input6">Input label</label>
  <input type="text" class="sharpen-form-control" id="input6" />
  <div class="sharpen-form-text sharpen-form-text--error">This field is required</div>
</div>`
};

export const FormDocument = {
  name: 'Legal documents',
  render: () => `<div class="sharpen-form-group">
  <label class="sharpen-form-label">Consent for Research Program</label>
  <div class="sharpen-form-document">
    <h5>What am I agreeing to if I consent?</h5>
    <p>One of Sharpen's missions is to give to customers like you the opportunity to participate in relevant research and to contribute to the development of novel evidence-based solutions that will improve learning outcomes for all children. When opting in the Research Program, you are consenting to having Sharpen researchers use your self-reported information and assessment data for research intended for publication in peer-reviewed journals. <strong>Research studies are overseen by an independent ethics review board and are performed exclusively on de-identified data. Sharpen researchers and research collaborators will never have access to your personal identifiable information.</strong> These studies may be sponsored by Sharpen or other qualified entities, including research organizations that may be funded by the federal government.</p>
    <h5>What data are used in Sharpen research?</h5>
    <p>Self-reported information includes any information submitted to Sharpen, excluding all personal identifiable information submitted during account set setup or user profile creation such as name, user ID, password, address, email address, or credit card information. Assessment data include questionary responses, assessment results, and genetic data. Self-reported information and assessment data may be used to discover links between genetic markers, learning skills, learning traits, and/or other learning characteristics. These advances could be used to better understand the cause of learning difficulties, improve early detection, or optimize intervention programs.</p>
  </div>
  <div class="sharpen-form-check">
    <input type="radio" class="sharpen-form-check-input" name="legal_radio" id="legal_radio_1" />
    <label class="sharpen-form-label" for="legal_radio_1">Opt in to the Research Program</label>
  </div>
  <div class="sharpen-form-check">
    <input type="radio" class="sharpen-form-check-input" name="legal_radio" id="legal_radio_2" />
    <label class="sharpen-form-label" for="legal_radio_2">Opt out of the Research Program</label>
  </div>
</div>`
}

export const SurveyHorizontal = {
  name: 'Survey Style: Horizontal',
  render: () => `<div class="sharpen-form-survey">
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_1" />
    <label for="reason_radio1_1">I don’t have enough time</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_2" />
    <label for="reason_radio1_2">Price</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_3" />
    <label for="reason_radio1_3">Prefer to teach offline</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_4" />
    <label for="reason_radio1_4">Requires 2 devices</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_5" />
    <label for="reason_radio1_5">Difficult to use</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_6" />
    <label for="reason_radio1_6">Child not making enough progress</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_7" />
    <label for="reason_radio1_7">Content does not fit child's needs</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="reason_radio1_8" />
    <label for="reason_radio1_8">Other</label>
  </div>
</div>`
}

export const SurveyVerticalRadio = {
  name: 'Survey Style: Vertical Radio',
  render: () => `<div class="sharpen-form-survey sharpen-form-survey-column">
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_2" />
    <label for="survey_radio1_2">Kindergarten</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_3" />
    <label for="survey_radio1_3">Grade 1</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_4" />
    <label for="survey_radio1_4">Grade 2</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_5" />
    <label for="survey_radio1_5">Grade 3</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_6" />
    <label for="survey_radio1_6">Grade 4</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_7" />
    <label for="survey_radio1_7">Grade 5</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="radio" name="radio1" id="survey_radio1_8" />
    <label for="survey_radio1_8">Grade 6 or older</label>
  </div>
</div>`
}

export const SurveyVerticalCheckbox = {
  name: 'Survey Style: Vertical Checkbox',
  render: () => `        <div class="sharpen-form-survey sharpen-form-survey-column">
  <div class="sharpen-form-survey-option">
    <input type="checkbox" name="checkbox1" id="survey_checkbox1_1" />
    <label for="survey_checkbox1_1">Dyslexia</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="checkbox" name="checkbox1" id="survey_checkbox1_2" />
    <label for="survey_checkbox1_2">Dyscalculia</label>
  </div>
  <div class="sharpen-form-survey-option">
    <input type="checkbox" name="checkbox1" id="survey_checkbox1_3" />
    <label for="survey_checkbox1_3">Auditory disorder</label>
  </div>
</div>`
}