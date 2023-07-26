# Kezuri: The Sharpen Design System

> 削り - _kezuri_ - shavings, cuttings

## Usage

TBD

## Development

First, clone the repository and install dependencies with `npm install`.

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
* In your `@Component` metadata, remove the `shadow` setting since we do not use the Shadow DOM unless we absolutely need it.