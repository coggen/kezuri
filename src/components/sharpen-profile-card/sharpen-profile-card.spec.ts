import { newSpecPage } from '@stencil/core/testing';
import { SharpenProfileCard } from './sharpen-profile-card';

it('should render with default buttonText', async () => {
  const page = await newSpecPage({
    components: [SharpenProfileCard],
    html: `<sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com"></sharpen-profile-card>`,
  });
  expect(page.root).toEqualHtml(`
    <sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com"><sharpen-card border="gray" padding="large"><div class="initial">JA</div><div class="name">Foo</div><a class="sharpen-button sharpen-button--primary sharpen-button--small" href="https://sharpen.com">Select</a></sharpen-card></sharpen-profile-card>
  `);
});

it('should render with custom buttonText', async () => {
  const page = await newSpecPage({
    components: [SharpenProfileCard],
    html: `<sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" button-text="Click Me"></sharpen-profile-card>`,
  });
  expect(page.root).toEqualHtml(`
    <sharpen-profile-card button-text="Click Me" name="Foo" initial="JA" url="https://sharpen.com"><sharpen-card border="gray" padding="large"><div class="initial">JA</div><div class="name">Foo</div><a class="sharpen-button sharpen-button--primary sharpen-button--small" href="https://sharpen.com">Click Me</a></sharpen-card></sharpen-profile-card>
  `);
});
