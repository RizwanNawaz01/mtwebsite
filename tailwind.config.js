/** @type {import('tailwindcss').Config} */
export default {content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {  
        "yellow": "#f3e91e", 
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

