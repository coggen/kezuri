/**
 * **Tabs** are a horizontal navigation component reminiscent of manila
 * folders. Use them for linking to a set of related interface panels.
 */
export default {
  title: 'Molecules/Tabs',
  tags: ['autodocs'],
  render: () => `<ul class="sharpen-tabs">
  <li class="tab selected">
    <a href="#"><i class="sharpen-icon">info</i>Details</a>  
  </li>
  <li class="tab">
    <a href="#"><i class="sharpen-icon">history</i>History</a>  
  </li>
</ul>`,
};

export const WithIcons = {};

export const TextOnly = {
  render: () => `<ul class="sharpen-tabs">
  <li class="tab selected">
    <a href="#">Details</a>  
  </li>
  <li class="tab">
    <a href="#">History</a>  
  </li>
</ul>`
}