import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'lg': '1028px',
      'xl': '1920px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      'xs': ['12px', {
        lineHeight: '14.22px',
        fontWeight: '300',
      }],
      'sm': ['13px', {
        lineHeight: '18px',
        fontWeight: '400',
      }],
      'l': ['18px', {
        lineHeight: '21.6px',
        fontWeight: '400',
      }],
      'xl': ['24px', {
        lineHeight: '28.8px',
        fontWeight: '400',
      }],
      '2xl': ['24px', {
        lineHeight: '28.8px',
        fontWeight: '600',
      }],
      '3xl': ['48px', {
        lineHeight: '57.6px',
        fontWeight: '600',
      }]
    },
  },
  plugins: [],
} satisfies Config;
