import type { Config } from "tailwindcss";

const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        signup: "url(/arni-signup-page-bg.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#AC0D0C',
        textcolor: '#ffffff',
        crimsonred: '#CD3D64'
      },
      boxShadow: {
        'spreaded': '0 10px 100px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
