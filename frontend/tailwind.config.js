const daisyui = require('daisyui');


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        twitterdark: {
          primary: "#8B5CF6",       // Vibrant violet — main buttons
          secondary: "#2563EB",    // Electric blue — secondary actions
          accent: "#22D3EE",       // Cyan — highlights and interactions
          neutral: "#14162B",      // Deep indigo — cards and surfaces

          "base-100": "#080B18",   // Main application background
          "base-200": "#0E1226",   // Panels and elevated sections
          "base-300": "#1B2140",   // Borders and dividers
          "base-content": "#F8FAFC", // Main text

          info: "#38BDF8",         // Information messages
          success: "#34D399",      // Success messages
          warning: "#FBBF24",      // Warnings
          error: "#FB7185",
        },
      },
    ],
    defaultTheme: "twitterdark",
  },
}
