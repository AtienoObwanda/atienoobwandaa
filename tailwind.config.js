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
          dark: '#1F1D2B',
          white: '#FFFFFF',
        },

        animation: {
          ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        },
        // next
        keyframes: {
          infiniteSlider: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform: "translateX(calc(-100px * 5))",
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
