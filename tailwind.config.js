/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
        backgroundImage: {
            'bg-img': "url('images/cup.png')";
          }
        
    },
  },
  plugins: [],
};
