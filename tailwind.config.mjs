/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Columbia Dusk tokens (values live in Layout.astro as CSS variables, with a dark-mode set)
        paper: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        brass: 'var(--brass)',
        brassfill: 'var(--brass-fill)',
        navy: 'var(--navy)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Iowan Old Style"', '"Palatino Linotype"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
