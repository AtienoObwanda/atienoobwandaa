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
          // sm: '640px',
          // md: '768px',
          // lg: '1024px',
          // xl: '1280px',
          // 2xl: '1536px',
        },
        // next
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          caveat: ['Caveat', 'cursive'],
          poppins: ["Poppins", "sans-serif"],
          adelia: ["ADELIA", "cursive"],
          gotham: ['Gotham', 'sans-serif'],
          newyork: ['NewYork', 'sans-serif'],
          // newyork:["New York", ]
        },  
        // next
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
