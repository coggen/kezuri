import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'kezuri2',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/scss/variables.scss',
        'src/scss/mixins.scss',
      ],
    })
  ],
  globalStyle: 'src/scss/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [ {
        src: '../assets',
        dest: 'kezuri2/assets'
      } ],
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [ {
        src: '../assets',
        dest: 'build/assets'
      } ],
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
