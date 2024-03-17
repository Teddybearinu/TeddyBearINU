import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "728px",
        md: "1024px",
        lg: "1440px",
        xl: "1680px",
        "2xl": "1920px",
      },
      container: {
        screens: {
          default: "100%",
          "2xl": "1920px",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
