const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/preline/preline.js",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: [
                "Playfair Display",
                "Kantumruy Pro",
                ...defaultTheme.fontFamily.sans,
            ],
            mono: ["Georgia", "Noto Serif Khmer", ...defaultTheme.fontFamily.mono],
        },
        extend: {
            backgroundColor: (theme) => ({
                facebook: "#1778F2",
                aba: "#007297",
                bakong: "#f70110",
                tfd: "#dc2626",
                cover: "#130f40",
                bg: "#34495e"
            }),
            colors: (theme) => ({
                facebook: "#1778F2",
                aba: "#007297",
                aba_dark: "#055d7c",
                bakong: "#f70110",
                tfd: "#dc2626",
                cover: "#130f40",
                bg: "#34495e"
            }),
        },
    },
    plugins: [require('preline/plugin'),],
}
