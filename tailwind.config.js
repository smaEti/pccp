/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xsm' : '400px',
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
		'borderLike' : '2px -1px 11px 14px rgba(0,0,0,0.07),0px 2px 4px 0px rgba(0,0,0,0.07),0px 4px 8px 0px rgba(0,0,0,0.07),0px 8px 16px 0px rgba(0,0,0,0.07),0px 16px 32px 0px rgba(0,0,0,0.07),0px 32px 64px 0px rgba(0,0,0,0.07)',
        "custom": 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}