import typescript from "rollup-plugin-typescript2"; // 处理typescript
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        plugins: [
            typescript(), // typescript 转义
            babel({
                babelrc: false,
                babelHelpers: "bundled",
                presets: [["@babel/preset-env", { modules: false, loose: true }]],
                plugins: [["@babel/plugin-transform-class-properties", { loose: true }]],
                exclude: "node_modules/**",
            }),
            terser(),
        ],
        output: [{ file: "dist/koi-digit.js", format: "es", name: "koi-digit" }],
    },
    {
        input: "src/index.ts",
        plugins: [dts()],
        output: { file: "dist/koi-digit.d.ts" },
    },
];
