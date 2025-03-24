import type { Config } from "tailwindcss";

export const config : Config = {
    content: [
        "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    darkMode: 'class',
};