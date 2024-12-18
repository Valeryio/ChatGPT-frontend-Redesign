/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
      extend: {
        fontSize: {
            base: '16px',
          },
        spacing: {
            '100': "100%",
            '100vh': '100vh',
            '100vw': '100vw',
          },
        colors: {
            "c-green": {
                100: "rgba(1, 154, 90, 1)",
                50: "rgba(1, 154, 90, 0.8)"
            },
            "c-dark": {
                100: "#000000",
                50: "#222222"
            },
            "c-gray": {
                100: "#E5E5E5",
                50: "#2D2D2D"
            },
            "c-red": {
                100: "#FF5555"
            },
            "c-white": {
                100: "rgba(229, 229, 229, 1)",
                40: "rgba(229, 229, 229, 0.4)"
            }
        },
        gridTemplateColumns: {
            // Simple 16 row grid
            'layout_col': '19rem 1fr',
            'layout-row': '1fr'

          },
          borderRadius: {
            'large': '10px',
            "semi": "16px"
        }
      },
    },
    plugins: [],
  }