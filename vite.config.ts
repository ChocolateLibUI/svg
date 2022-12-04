import { resolve } from 'path'
import { defineConfig } from 'vite'
import { name, dependencies } from "./package.json"
import dts from "vite-plugin-dts"

console.log(Object.keys(dependencies));


export default defineConfig(({ command, mode, ssrBuild }) => {
    switch (command) {
        case 'serve':
            if (mode === 'pages') {
                return {
                    server: {
                        host: true,
                        port: 666
                    },
                    preview: {
                        port: 999
                    },
                    root: "./pages"
                }
            } else {
                return {
                    server: {
                        host: true,
                        port: 999
                    },
                    build: {
                        outDir: "./dist"
                    },
                    preview: {
                        port: 999
                    },
                    root: "./cypress/pages",
                }
            }
        case 'build':
            if (mode === 'pages') {
                return {
                    root: "./pages",
                    build: {
                        outDir: "../docs"
                    }
                }
            } else if (mode === 'tests') {
                return {
                    root: "./cypress/pages",
                    build: {
                        outDir: "./dist"
                    }
                }
            } else {
                return {
                    build: {
                        lib: {
                            entry: resolve(__dirname, 'src/index.ts'),
                            name: name,
                            fileName: 'index',
                            formats: ['es', 'umd'],
                        },
                        rollupOptions: {
                            external: Object.keys(dependencies)
                        },
                    },
                    plugins: [dts({
                        rollupTypes: true
                    })]
                }
            }
    }
})