export default {
  title: 'Utilities/Table',
  tags: ['autodocs'],
  argTypes: {
    styleClasses: {
      control: 'check',
      options: ['Last Column Controls', 'Hover'],
      mapping: {
        'Last Column Controls': 'sharpen-table-controls-end',
        'Hover': 'sharpen-table-hover',
      },
    },
  },
  args: {
    styleClasses: [],
  },
  render: args => `<table class="sharpen-table ${args.styleClasses.join(' ')}">
  <thead>
    <tr>
      <th>Date</th>
      <th>Product / Period</th>
      <th>Amount</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jul 1, 2023</td>
      <td>
        Jul 1, 2023 &ndash; Jul 31, 2023
      </td>
      <td>$49.00</td>
      <td><a href="https://sharpen.com">View</a></td>
    </tr>
    <tr>
      <td>Jun 1, 2023</td>
      <td>
        Jun 1, 2023 &ndash; Jun 30, 2023
      </td>
      <td>$49.00</td>
      <td><a href="https://sharpen.com">View</a></td>
    </tr>
    <tr>
      <td>May 1, 2023</td>
      <td>
        May 1, 2023 &ndash; May 31, 2023
      </td>
      <td>$49.00</td>
      <td><a href="https://sharpen.com">View</a></td>
    </tr>
  </tbody>
</table>`,
};

export const Example = {
  args: {},
};

/**
 * When a table lacks a header and you do not want the first row to have a top
 * border, apply the `sharpen-table--headless` class.
 */
export const HeadlessTable = {
  render: () => `
<table class="sharpen-table sharpen-table--headless sharpen-text-xs sharpen-text-height--compressed">
  <tbody>
    <tr>
      <td><img src="https://placehold.co/150x200" class="sharpen-img-responsive"></td>
      <td>
        Kids learn new words faster when they learn about the sounds that make up words.
        <span class="sharpen-text--color-gray-3">&mdash;Kilpatrick 2015, 2016; Ehri 2005, 2014; Scammaca et al 2007</span>
      </td>
    </tr>
    <tr>
      <td><img src="https://placehold.co/150x200" class="sharpen-img-responsive"></td>
      <td>
        High-quality, intense, one-on-one reading tutoring was more than twice as likely to catch a kid up to classmates by the next year.
    <span class="sharpen-text--color-gray-3">&mdash;Vellutino et al 1996</span>
      </td>
    </tr>
  </tbody>
</table>
`,
};

export const PricingTable = {
  render: () => `<table class="sharpen-table sharpen-table--pricing">
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
</table>`,
};

export const PracticeProgressTable = {
  render: () => `
<table class="sharpen-table sharpen-table-practice">
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
`,
};
