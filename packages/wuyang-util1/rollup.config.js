import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const isProd = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'wUtil',
      file: pkg.browser,
      format: 'umd',
    },
    { file: pkg.main, format: 'cjs', sourcemap: true, banner: `/*! ${pkg.version} */` },
    { file: pkg.module, format: 'es', sourcemap: true, banner: `/*! ${pkg.version} */` },
  ],
  plugins: [nodeResolve(), typescript()],
};
