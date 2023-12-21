/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: true,
    },
    content: [
        './web/themes/custom/*.theme',
        './web/themes/custom/**/*.twig',
        './web/themes/custom/**/*.js',
    ],
    // These classes will always be included.
    safelist: [],
    // These classes will never be included.
    blocklist: [],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#edf9ff',
                    100: '#d6efff',
                    200: '#b6e5ff',
                    300: '#85d7ff',
                    400: '#4bbfff',
                    500: '#229eff',
                    600: '#0a7fff',
                    700: '#0466f1',
                    800: '#0a52c3',
                    900: '#104B9F',
                    950: '#0f2d5c',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
