export default {
  title: 'Utilities/Table',
  tags: ['autodocs'],
  argTypes: {
    styleClasses: {
      control: 'check',
      options: ['Last Column Controls', 'Hover'],
      mapping: {
        'Last Column Controls': 'sharpen-table-controls-end',
        'Hover': 'sharpen-table-hover'
      }
    },
  },
  args: {
    styleClasses: []
  },
  render: (args) => `<table class="sharpen-table ${args.styleClasses.join(' ')}">
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
</table>`
};

export const Example = {
  args: { }
}

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
</table>`
}