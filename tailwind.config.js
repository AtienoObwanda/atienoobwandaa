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
          ["infinite-slider"]: "infiniteSlider 20s linear infinite",
          "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
          slide: "slide var(--speed) ease-in-out infinite alternate",
        },
        // next
        keyframes: {
          infiniteSlider: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform: "translateX(calc(-100px * 5))",
            },
          },
          "spin-around": {
            "0%": {
              transform: "translateZ(0) rotate(0)",
            },
            "15%, 35%": {
              transform: "translateZ(0) rotate(90deg)",
            },
            "65%, 85%": {
              transform: "translateZ(0) rotate(270deg)",
            },
            "100%": {
              transform: "translateZ(0) rotate(360deg)",
            },
          },
          slide: {
            to: {
              transform: "translate(calc(100cqw - 100%), 0)",
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











