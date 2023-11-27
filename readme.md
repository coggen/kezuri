# Kezuri: The Sharpen Design System

> 削り - _kezuri_ - shavings, cuttings

## Usage

Kezuri is [deployed to npm](https://www.npmjs.com/package/@sharpen-com/kezuri)
and [served via jsDelivr CDN](https://www.jsdelivr.com/package/npm/@sharpen-com/kezuri).

In short, we include Kezuri's JS and CSS from the CDN in our application template.

```
<script src="https://cdn.jsdelivr.net/npm/@sharpen-com/kezuri@0.2/dist/kezuri/kezuri.esm.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sharpen-com/kezuri@0.2/dist/kezuri/kezuri.min.css">
```

(By only specifying the _minor_ version in the URL, Sharpen apps will
automatically use new _patch_ versions.)

## Development

First, clone the repository and install dependencies with `npm install`.

### Run Storybook

```
$ bin/storybook
```

This will start three processes:

1. The Stencil builder in watch mode
2. An SCSS watcher
3. Storybook in dev mode

The Kezuri Storybook site will appear in your browser at `http://localhost:6006/`.

You can shut down all three processes at once with a simple `Ctrl-c`.


### Run a local dev server

```
$ bin/dev
```

This will start two processes:

1. The Stencil builder in watch mode
2. An SCSS watcher

The web page at `src/index.html` will appear in your browser at `http://localhost:3333/`.

You can build new prototypes in the `src/prototypes` folder; add a new entry
to the table in `src/index.html` with a link.

### Add a new component

```
$ npx stencil g sharpen-component-name
```

Your component's tag name must start with `sharpen-`.

The generator will ask you which files to generate. This allows you to bootstrap
a stylesheet as well as spec and e2e tests along with the component file.

All components will be generated within the `src/components` directory: a
sub-directory will be created with the same name as the component tag name you
provided, and within that folder the files will be generated. 

Some guidance on component development:

* Rename the `css` file to `scss` since we use Sass.
* In your `@Component` metadata, remove the `shadow` setting since we do not use the Shadow DOM (unless you absolutely need it).

### Review

* Whenever you push code to Github, it will get compiled by Chromatic.
* Create a pull request and Chromatic will facilitate a UI review process.
* TODO: When we create a Github release, it will get pushed to npm

## Choices

* We define *standard design tokens* as CSS custom properties in `src/scss/tokens/tokens.scss`.
* We generate a set of *utility CSS classes* in `src/index.scss` that can be used by Kezuri's components or in other contexts.
* Nearly every web browser supports the WOFF2 web font format, so for best performance, we're only including that one file per font.

## Inspirations

* [You might not need shadow DOM](https://www.hjorthhansen.dev/you-might-not-need-shadow-dom/)
* [Styling Web Components Using A Shared Style Sheet](https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/)
