module.exports = {
    plugins: [
        require.resolve('prettier-plugin-astro'),
        require.resolve('prettier-plugin-tailwindcss'),
    ],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    pluginSearchDirs: false,
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
};
