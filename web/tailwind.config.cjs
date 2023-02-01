/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        extend: {
            colors: {
                background: "#09090A",
            },
            fontFamily: {
                regular: "Inter_400Regular",
                semibold: "Inter_600SemiBold",
                bold: "Inter_700Bold",
                extrabold: "Inter_800ExtraBold",
            },
            gridTemplateRows: {
                7: "repeat(7, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
