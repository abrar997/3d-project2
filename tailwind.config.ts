import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: '"Libre Baskerville", serif',
        title: '"Patua One",serif',
      },
      colors: {
        main: "#eee",
        secondary: "#16A34A",
        text: "#D1D5DB",
        dark: "#1c1b1b",
      },
      fontSize: {
        paragraph: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
