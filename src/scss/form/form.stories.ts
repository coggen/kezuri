export default {
  title: 'Utilities/Form',
  tags: ['autodocs'],
};

export const TextInput = {
  render: () => `<label class="sharpen-form-label" for="input1">Child's first name</label>
<input class="sharpen-form-control" id="input1" type="text" placeholder="Enter name..." />`
};

export const Textarea = {
  render: () => `<label class="sharpen-form-label" for="input2">Book excerpt</label>
<textarea class="sharpen-form-control" id="input2">Once more. Say you are in the country; in some high land of lakes. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it.</textarea>`
};

export const Select = {
  render: () => `<label class="sharpen-form-label">Favorite shawarma topping</label>
<select class="sharpen-form-control">
  <option>Hummus</option>
  <option>Tahini</option>
  <option>Amba</option>
  <option>Toum</option>
</select>`
};

export const RadioButtons = {
  render: () => `<div class="sharpen-form-check">
  <input class="sharpen-form-check-input" type="radio" name="example1" id="input4" />
  <label class="sharpen-form-label" for="input4">Elephant</label>
</div>`
};

export const Checkboxes = {
  render: () => `<label class="sharpen-form-label">Child's first name</label>
<input class="sharpen-form-control" type="text" placeholder="Enter name..." />`
};