// tailwind.config.js
module.exports = {
  mode: "jit",  
  
  content: [
    //   "./index.html",
    //   "./src/**/*.{js,jsx}",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
      
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          orange: '#FE8D01',
          lighterOrange:'#FFEBCB',
          dark: '#0F172A',
          white: '#FFFFFF',
          light:'',
          // 1F1D2B
        },
        screens:{
          md: { max: "1050px" }, 
          sm: { max: "550px" },
          xs: {max:"475px"},
        },
        // next
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          caveat: ['Caveat', 'cursive'],
          poppins: ["Poppins", "sans-serif"],
          adelia: ["ADELIA", "cursive"],
          gotham: ['Gotham', 'sans-serif'],
          newyork: ['NewYork', 'sans-serif'],
        },  
        // next
        animation: {
          orbit: "orbit calc(var(--duration)*1s) linear infinite",         
        },
        // next
        keyframes: {
          orbit: {
            "0%": {
                transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
            },
            "100%": {
                transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
            },
        },
          },
      
    // next

       
      },
    },
    plugins: [],
  }
  

  // orange:FE8D01
  // dark: 1F1D2B
  // white:


  // fontFamily: {
//     inter: ['Inter', 'sans-serif'],
//     caveat: ['Caveat', 'cursive'],
// },











