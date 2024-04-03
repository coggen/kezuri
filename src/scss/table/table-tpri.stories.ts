/**
 * Our TPRI Results table attempts to take some fairly complex data and
 * show it in a format that's easy for parents to understand. In particular,
 * we want parents to see that effective use of the TPRI involves regular
 * assessment: 3 times a year in Kindergarten, Grade 1, and Grade 2. We also
 * want the table to make clear that only certain skills are assessed at
 * certain timepoints.
 */
export default {
  title: 'Organisms/Table: TPRI Results',
  tags: ['autodocs'],
};

/**
 * Above the result tables, we provide a legend that describes the indicators
 * that will appear within.
 */
export const Legend = {
  render: () => `<table class="sharpen-table">
  <tbody>
    <tr>
      <td><sharpen-label type="success">D</sharpen-label></td>
      <td><strong>Developed</strong>: Your child was successful with the task, which means that they will likely make good progress with appropriate instruction</td>
    </tr>
    <tr>
      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td><strong>Still Developing</strong>: Your child is still working to develop this skill, and may benefit from additional reading assistance and/or assessment.</td>
    </tr>
    <tr>
      <td>N/A</td>
      <td>The skill does not get assessed at that time point</td>
    </tr>
    <tr>
      <td>&mdash;</td>
      <td>A skill assessment was missed at that time point</td>
    </tr>
  </tbody>
</table>`,
};

export const WideScreenExample = {
  render: () => `<table class="sharpen-tpri wide">
  <thead>
    <tr class="grades">
      <th></th>
      <th colspan="3">Kindergarten</th>
      <th colspan="3">Grade 1</th>
      <th colspan="3">Grade 2</th>
    </tr>
    <tr class="timepoints">
      <th></th>
      <th>Beginning</th>
      <th>Middle</th>
      <th>End</th>
      <th>Beginning</th>
      <th>Middle</th>
      <th>End</th>
      <th>Beginning</th>
      <th>Middle</th>
      <th class="latest">End</th>
    </tr>
  </thead>
  <tbody>
    <tr class="overall">
      <th class="tpri-result-description">
        <div class="tpri-skill">Overall result</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td class="latest"><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Letter Sounds</div>
        <div class="tpri-skill-description">Your child's ability to recognize letters and letter sounds</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><span class="na">N/A</span></td>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td class="latest"><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Blending Phonemes</div>
        <div class="tpri-skill-description">Your child's ability to hear and play with the sounds or syllables in words</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="success">D</sharpen-label></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><span class="na">N/A</span></td>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td class="latest"><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Word Reading</div>
        <div class="tpri-skill-description">Your child's ability to read a list of decodable words</div>
      </th>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td class="latest"><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
  </tbody>
</table>`,
};

export const NarrowScreenExample = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  render: () => `<table class="sharpen-tpri narrow">
  <thead>
    <tr class="grades">
      <th></th>
      <th colspan="3">Kindergarten</th>
    </tr>
    <tr class="timepoints">
      <th></th>
      <th>Begin</th>
      <th>Mid</th>
      <th>End</th>
    </tr>
  </thead>
  <tbody>
    <tr class="overall">
      <th class="tpri-result-description">
        <div class="tpri-skill">Overall result</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Letter Sounds</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Blending Phonemes</div>
      </th>

      <td><sharpen-label type="danger">SD</sharpen-label></td>
      <td>&mdash;</td>
      <td><sharpen-label type="success">D</sharpen-label></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Word Reading</div>
      </th>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
    </tr>
  </tbody>
</table>

<table class="sharpen-tpri narrow">
  <thead>
    <tr class="grades">
      <th></th>
      <th colspan="3">Grade 1</th>
    </tr>
    <tr class="timepoints">
      <th></th>
      <th>Begin</th>
      <th>Mid</th>
      <th>End</th>
    </tr>
  </thead>
  <tbody>
    <tr class="overall">
      <th class="tpri-result-description">
        <div class="tpri-skill">Overall result</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Letter Sounds</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Blending Phonemes</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Word Reading</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
  </tbody>
</table>

<table class="sharpen-tpri narrow">
  <thead>
    <tr class="grades">
      <th></th>
      <th colspan="3">Grade 2</th>
    </tr>
    <tr class="timepoints">
      <th></th>
      <th>Begin</th>
      <th>Mid</th>
      <th class="latest">End</th>
    </tr>
  </thead>
  <tbody>
    <tr class="overall">
      <th class="tpri-result-description">
        <div class="tpri-skill">Overall result</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td class="latest"><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Letter Sounds</div>
      </th>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td class="latest"><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Blending Phonemes</div>
      </th>

      <td><span class="na">N/A</span></td>
      <td><span class="na">N/A</span></td>
      <td class="latest"><span class="na">N/A</span></td>
    </tr>

    <tr>
      <th class="tpri-result-description">
        <div class="tpri-skill">Word Reading</div>
      </th>

      <td>&mdash;</td>
      <td>&mdash;</td>
      <td class="latest"><sharpen-label type="danger">SD</sharpen-label></td>
    </tr>
  </tbody>
</table>`,
};
