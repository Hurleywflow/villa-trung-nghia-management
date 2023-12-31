/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      width: {
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
      // colors: {
      //   primary: '#038C7F',
      //   secondary: '#F2C641',
      //   tertiary: {
      //     dark: '#F27405',
      //     light: '#F2C641',
      //   },
      // },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'skew-scroll': {
          '0%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
          },
          '100%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
          },
        },
        'loader-bounce': {
          '0%': { left: 'calc(var(--width) * -1)' },
          '50%': { left: '100%' },
          '100%': { left: 'calc(var(--width) * -1)' },
        },

        'loader-infinite': {
          '0%': { left: 'calc(var(--width) * -1)' },
          '100%': { left: 'calc(100% + var(--width))' },
        },

        'loader-stretch': {
          '0%': { left: 'calc(var(--width) - 100%)' },
          '25%': { opacity: '0' },
          '50%': { left: 'calc(100% - var(--width))', opacity: '1' },
          '75%': { opacity: '0' },
          '100%': { left: 'calc(var(--width) - 100%)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Skew carousel
        'skew-scroll': 'skew-scroll 20s infinite linear ',
        // loading
        'loader-bounce': 'loader-bounce 3s ease-in-out infinite',
        'loader-infinite': 'loader-infinite 2s ease-in-out infinite',
        'loader-stretch': 'loader-stretch 3s ease-in-out infinite',
        marquee: 'marquee var(--duration, 30s) linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
