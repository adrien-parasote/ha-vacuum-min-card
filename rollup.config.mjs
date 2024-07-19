// rollup.config.js
import { createRequire } from 'node:module';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import postcssPresetEnv from 'postcss-preset-env';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
  replace({
    values: {
      COMPONENT_VERSION_VALUE: pkg.version
    },
    preventAssignment: true
  }),
  postcss({
    plugins: [
      postcssPresetEnv({
        stage: 1,
        features: {
          'nesting-rules': true
        }
      })
    ],
    extract: false
  }),
  postcssLit({
    importPackage: 'lit-element'
  }),
  image(),
  typescript(),
  terser({
    output: {
      quote_style: 3,
      comments: false
    }
  })
];

export default {
  input: './src/vacuum-card-min.ts',
  output: {
    dir: 'dist',
    format: 'es',
    inlineDynamicImports: true
  },
  context: 'window',
  plugins: plugins
};
