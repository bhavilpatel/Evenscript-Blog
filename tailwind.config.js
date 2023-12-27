/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },

        jump: {
          '40%': { 
            'transform': 'translateY(-4px)',
            'text-shadow': '0 3px 1px rgba(0, 0, 0, .2)'
          },
          '100%': {
            'transform': 'translateY(0px)'
          }
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .6s ease-in-out",
        jump: 'jump 0.5s linear', 
      },
    },
  },
  plugins: [],
}