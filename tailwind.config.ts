
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
                heritage: {
                    50: '#FFF5F5',
                    100: '#FED7D7',
                    200: '#FEB2B2',
                    300: '#FC8181',
                    400: '#F56565',
                    500: '#E53E3E',
                    600: '#C53030',
                    700: '#9B2C2C',
                    800: '#822727',
                    900: '#63171B',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)' 
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)' 
                    },
                },
                'fade-in-right': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateX(-20px)' 
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateX(0)' 
                    },
                },
                'fade-in-left': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateX(20px)' 
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateX(0)' 
                    },
                },
                'float': {
                    '0%, 100%': { 
                        transform: 'translateY(0)' 
                    },
                    '50%': { 
                        transform: 'translateY(-10px)' 
                    },
                },
                'pulse-soft': {
                    '0%, 100%': { 
                        opacity: '1' 
                    },
                    '50%': { 
                        opacity: '0.8' 
                    },
                },
                'scale': {
                    '0%': { 
                        transform: 'scale(0.95)' 
                    },
                    '100%': { 
                        transform: 'scale(1)' 
                    },
                },
                'gradient-flow': {
                    '0%': { 
                        transform: 'rotate(0deg) scale(1)',
                        opacity: '0.8'
                    },
                    '25%': {
                        opacity: '0.9'
                    },
                    '50%': { 
                        transform: 'rotate(180deg) scale(1.1)',
                        opacity: '1'
                    },
                    '75%': {
                        opacity: '0.9'
                    },
                    '100%': { 
                        transform: 'rotate(360deg) scale(1)',
                        opacity: '0.8'
                    },
                },
                'breathe': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: '0.8'
                    },
                    '50%': {
                        transform: 'scale(1.2)',
                        opacity: '1'
                    },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.7s ease-out forwards',
                'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
                'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
                'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
                'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
                'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
                'scale': 'scale 0.5s ease-out forwards',
                'gradient-flow': 'gradient-flow 15s ease-in-out infinite',
                'breathe': 'breathe 8s ease-in-out infinite',
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            transitionDuration: {
                '400': '400ms',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
