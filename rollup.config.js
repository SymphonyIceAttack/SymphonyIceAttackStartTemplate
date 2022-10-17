// rollup.config.js
import babel from "rollup-plugin-babel"
import pluginNodeResolve from "@rollup/plugin-node-resolve"
import pluginCommonjs from "@rollup/plugin-commonjs"
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    input: './src/index.ts',//入口文件
    external: ['lodash'], //告诉rollup不要将此lodash打包，而作为外部依赖
    global: {},
    output: {
        file: './dist/index.js',
        format: 'cjs',
        name: 'bundleName',
        sourcemap: true  //生成bundle.map.js文件，方便调试
    },
    plugins: [
        typescript(),
        pluginCommonjs(),
        pluginNodeResolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        postcss(),
        terser(),
        livereload(),
        serve({
            open: true,
            contentBase: 'dist'
        })
    ]
}