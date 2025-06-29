
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					dark: '#050818',
					accent: '#7928CA',
					glow: '#FF0080',
					purple: '#9b87f5',
					blue: '#33C3F0',			
 			       	pink: 'hsl(320, 85%, 60%)',
        			orange: 'hsl(35, 100%, 55%)',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-delay': {
					'0%': { opacity: '0' },
					'50%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'neon-pulse': {
					'0%': { 
						textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #7928CA, 0 0 20px #7928CA',
						opacity: '1'
					},
					'50%': { 
						textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #FF0080, 0 0 20px #FF0080',
						opacity: '0.95'
					},
					'100%': { 
						textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #7928CA, 0 0 20px #7928CA',
						opacity: '1'
					}
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'twinkle': {
					'0%': { opacity: '0.2' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.2' }
				},
				'cursor-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-delay': 'fade-in-delay 1.5s ease-out',
				'neon-pulse': 'neon-pulse 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'cursor-blink': 'cursor-blink 1s step-end infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
