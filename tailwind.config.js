/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
		fontFamily: {
			sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		//  screens: {
		//   // 'sm': {'min': '640px', 'max': '767px'},
		//   // // => @media (min-width: 640px and max-width: 767px) { ... }

		//   // 'md': {'min': '768px', 'max': '1023px'},
		//   // // => @media (min-width: 768px and max-width: 1023px) { ... }

		//   // 'lg': {'min': '1024px', 'max': '1279px'},
		//   // // => @media (min-width: 1024px and max-width: 1279px) { ... }

		//   // 'xl': {'min': '1280px', 'max': '1535px'},
		//   // // => @media (min-width: 1280px and max-width: 1535px) { ... }

		//   '4xl': {'min': '2560px'},
		//   // => @media (min-width: 1536px) { ... }
		// },
		extend: {
			width: {
				// biome-ignore lint/style/useTemplate: <explanation>
				'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			colors: {
				backgroundHTML: '#0C1015',
				tertiary: {
					dark: '#F27405',
					light: '#F2C641',
					primary: '#BEB8AE',
					secondary: '#F2C641',
				},
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
				marqueehori: {
					to: { transform: 'translateY(-50%)' },
				},
				// background clip text
				slowpan: {
					'0%': { backgroundPosition: 'top left' },
					'100%': { backgroundPosition: 'bottom right' },
				},
				// Text skimmer
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0',
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0',
					},
				},
				// Border beam
				'border-beam': {
					'100%': {
						'offset-distance': '100%',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				//background clip text
				slowpan: 'slowpan 30s alternate ease-in-out infinite',
				// Skew carousel
				'skew-scroll': 'skew-scroll 20s infinite linear ',
				// loading
				'loader-bounce': 'loader-bounce 3s ease-in-out infinite',
				'loader-infinite': 'loader-infinite 2s ease-in-out infinite',
				'loader-stretch': 'loader-stretch 3s ease-in-out infinite',
				marquee: 'marquee var(--duration, 30s) linear infinite',
				marqueehori: 'marqueehori var(--duration, 30s) linear infinite',
				// Text skimmer
				shimmer: 'shimmer 8s infinite',
				// Border beam
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		// require('@tailwindcss/line-clamp'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			)
		}),
	],
}
