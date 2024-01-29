export default {
  title: 'Utilities/Images',
  tags: ['autodocs'],
};

/**
 * Make an image responsively respect the width of its container, while
 * maintaining its relative dimensions.
 */
export const ResponsiveImages = {
  render: () => `
<div class="row">
  <div class="col-4">
    <img class="sharpen-img-responsive" src="https://placehold.co/1000x500">
  </div>
  <div class="col-8">
    Some content next to it
  </div>
</div>
`
};
