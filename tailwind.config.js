/** @type {import('tailwindcss').Config} */
import rippleui from "rippleui";
import tailwindcssAnimated from "tailwindcss-animated";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    rippleui,
    tailwindcssAnimated,
    flowbitePlugin,
  ],
};
