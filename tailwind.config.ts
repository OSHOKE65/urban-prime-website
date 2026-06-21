import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1B5E20',
        'sage-green': '#8FBC8F', // approximate sage
        'earth-brown': '#8B4513',
        'charcoal': '#36454F',
        'subtle-gold': '#D4AF37',
        // extend others as needed
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      // optional: boxShadow, transitionDuration, etc.
    },
  },
  plugins: [],
} satisfies Config;