import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts',  // Deine Eingabedatei
    output: [
        {
            file: 'dist/index.js',  // ESModule-Ausgabe
            format: 'esm',
            sourcemap: true,  // Quellmap für Debugging
        },
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',  // Verwendet die tsconfig.json
            exclude: ['node_modules/**'],  // Verhindert, dass node_modules verarbeitet werden
        }),
        postcss({
            extract: true,  // Extrahiere das CSS in eine separate Datei
            minimize: false,  // Minimiere das CSS
        }),
    ],
    external: ['react', 'react-dom'],  // Diese externen Bibliotheken nicht in das Bundle einfügen
};
