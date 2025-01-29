/** @type {import('tailwindcss').Config} */
export default {content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {  
        "red": "#d80e0e", 
      },
    },
    fontFamily: {
      Roboto: "Roboto, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
}

