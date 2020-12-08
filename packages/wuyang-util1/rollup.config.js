import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const isDev = process.env.ROLLUP_WATCH === 'true';

const banner = `/*! 2020@wuyang ${pkg.version} */`;
const plugins = [nodeResolve(), typescript()];

if (!isDev) {
  plugins.push(terser());
}

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'wUtil',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      banner,
    },
    { file: pkg.main, format: 'cjs', sourcemap: true, banner },
    { file: pkg.module, format: 'es', sourcemap: true, banner },
  ],
  plugins,
};
