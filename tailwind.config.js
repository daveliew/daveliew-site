module.exports = {
  // Site is dark-only: the `dark` class is set permanently on <html> in
  // app/layout.tsx, so every dark: variant always wins and the light branch
  // never renders (light mode had unreadable lime-on-white links).
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Studio theme colors
        "studio-black": "var(--studio-black)",
        "studio-black-light": "var(--studio-black-light)",
        "studio-lime": "var(--studio-lime)",
        "studio-lime-muted": "var(--studio-lime-muted)",
        "studio-white": "var(--studio-white)",
        "studio-gray": "var(--studio-gray)",
        "studio-gray-dark": "var(--studio-gray-dark)",

        // Semantic colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "bg-primary": "var(--background-primary)",
        "bg-secondary": "var(--background-secondary)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",

        // Opacity variants
        "studio-lime-10": "var(--studio-lime-10)",
        "studio-lime-20": "var(--studio-lime-20)",
        "studio-lime-30": "var(--studio-lime-30)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        heading: ["Jura", "sans-serif"],
        navbar: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
