import { newSpecPage } from '@stencil/core/testing';
import { SharpenProfileCard } from './sharpen-profile-card';

it('should render with default buttonText, color, and backgroundColor', async () => {
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

it('should render with custom color', async () => {
  const page = await newSpecPage({
    components: [SharpenProfileCard],
    html: `<sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" color="#ffffff"></sharpen-profile-card>`,
  });
  expect(page.root).toEqualHtml(`
    <sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" color="#ffffff"><sharpen-card border="gray" padding="large"><div class="initial" style="color: #ffffff;">JA</div><div class="name">Foo</div><a class="sharpen-button sharpen-button--primary sharpen-button--small" href="https://sharpen.com">Select</a></sharpen-card></sharpen-profile-card>
  `);
});

it('should render with custom background color', async () => {
  const page = await newSpecPage({
    components: [SharpenProfileCard],
    html: `<sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" background-color="#000000"></sharpen-profile-card>`,
  });
  expect(page.root).toEqualHtml(`
    <sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" background-color="#000000"><sharpen-card border="gray" padding="large"><div class="initial" style="background-color: #000000;">JA</div><div class="name">Foo</div><a class="sharpen-button sharpen-button--primary sharpen-button--small" href="https://sharpen.com">Select</a></sharpen-card></sharpen-profile-card>
  `);
});

it('should render with custom color and background color', async () => {
  const page = await newSpecPage({
    components: [SharpenProfileCard],
    html: `<sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" color="#ffffff" background-color="#000000"></sharpen-profile-card>`,
  });
  expect(page.root).toEqualHtml(`
    <sharpen-profile-card name="Foo" initial="JA" url="https://sharpen.com" color="#ffffff" background-color="#000000"><sharpen-card border="gray" padding="large"><div class="initial" style="color: #ffffff; background-color: #000000;">JA</div><div class="name">Foo</div><a class="sharpen-button sharpen-button--primary sharpen-button--small" href="https://sharpen.com">Select</a></sharpen-card></sharpen-profile-card>
  `);
});