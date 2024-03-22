import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'kezuri',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/scss/variables.scss',
        'src/scss/mixins.scss',
      ],
    })
  ],
  globalStyle: 'src/index.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [ {
        src: '../assets',
        dest: 'assets'
      } ],
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'http://prototypes.sharpen.com/',
      copy: [
        { src: '../assets', dest: 'build/assets' },
        { src: 'prototypes', dest: '.' }
      ],
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
