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
       
      },
    },
    plugins: [],
  }
  

  // orange:FE8D01
  // dark: 1F1D2B
  // white: