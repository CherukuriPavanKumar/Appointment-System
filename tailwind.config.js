/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'real-estate': {
        primary: '#1E3A8A',     // Deep Royal Blue (Trust, stability)
        secondary: '#3F6251',   // Deep Sage (Nature, calm)
        accent: '#C5A059',      // Muted Gold (Premium, luxury)
        dark: '#0F172A',        // Very dark blue/slate for text
        light: '#F9FAFB',       // Crisp off-white
        surface: '#FFFFFF',     // Pure white for cards
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      }
    },
    fontFamily: {
      serif: ['var(--font-playfair)', 'serif'],
      sans: ['var(--font-inter)', 'sans-serif'],
    },
  },
  plugins: [],
}
