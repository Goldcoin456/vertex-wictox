import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary orange from design spec
        primary: {
          100: '#FFEEE5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
        },
        // Neutral grays from design spec
        neutral: {
          50: '#FAFAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          500: '#647488',
          700: '#334155',
          900: '#0F172A',
        },
      },
      fontSize: {
        // Typography scale - using array format for Tailwind 4
        'headline': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['24px', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'body': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.005em' }],
        'label': ['14px', { lineHeight: '1.4', letterSpacing: '0.005em' }],
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      spacing: {
        // 8px base unit
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        4.5: '36px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        12: '96px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'base': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'base': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'dark-sm': '0 1px 2px 0 rgb(0 0 0 / 0.2)',
        'dark-base': '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
        'dark-md': '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      transitionDuration: {
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
