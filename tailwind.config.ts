import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-satoshi)', 'sans-serif'],
        display: ['var(--font-general-sans)', 'sans-serif']
      },
      colors: {
        "background-dark": "#010101",
        "background-light": "#fefefe",
        "text-dark": "#eee",
        "text-secondary-dark": "#555",
        "text-secondary-light": "#aaa",
        "boba": "#f7e7c8",
        "boba-light": "#F9F5EF",
      }
    },
  },
  plugins: [],
}
export default config