/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
      extend: {
        fontSize: {
            base: '1rem',
            h2: '1.2rem'
          },
        spacing: {
            '100': "100%",
            '3r': '3rem',
            '4r': '4rem',
            '13r': '13rem',
            '48r': '56rem',
            '100vh': '100vh',
            '100vw': '100vw',
            'img-width': '2rem'
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
            'main-col': '19rem 1fr',
            'main-row': '1fr',
            'c-3': 'repeat(3, 3fr)',

          },
          gridTemplateRows: {
            'r-3': 'repeat(3, 1fr)',
            'r-4': 'repeat(4, 1fr)'

          },
          borderRadius: {
            'large': '10px',
            'semi': '16px',
            '12p': '12px'
        }
      },
    },
    plugins: [],
  }