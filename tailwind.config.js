// tailwind.config.js
import {nextui} from "@nextui-org/react";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {},
    },
    darkMode: "class",
        plugins: [
            forms,
            nextui({
                themes: {
                    light: {
                        layout: {},
                        colors: {
                            background: "#FFFFFF",
                            foreground: "#11181C",
                            primary: "#0072f5",
                        }
                    },
                    dark: {
                        layout: {},
                        colors: {
                            background: "#000000",
                            foreground: "#ECEDEE",
                            primary: "#0072f5",
                        }
                    },
                },
            }
        ),
    ],
}