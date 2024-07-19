// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import postcssPresetEnv from 'postcss-preset-env';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const plugins = [
  nodeResolve(),
  commonjs(),
  json(),
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
  postcssLit(  {
        importPackage: 'lit-element',
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
