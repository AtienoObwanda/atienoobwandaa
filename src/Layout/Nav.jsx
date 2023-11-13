import React,{useEffect, useState} from 'react'
import {FaGithub,FaLinkedin,FaTwitter,FaWhatsapp,FaInstagram,FaPhone,FaMoon} from 'react-icons/fa'
// 
import {BsSun} from 'react-icons/bs'
import {BiLogoDevTo} from 'react-icons/bi'











const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //   setDarkMode(prevDarkMode => !prevDarkMode);
    // };

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
        document.documentElement.classList.toggle('dark');
      };

  return (
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 
      dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <a href="https://github.com/AtienoObwanda/" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <FaGithub className='dark:orange-icon'/>
          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="https://www.linkedin.com/in/millicent-atieno/" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <FaLinkedin/>
          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="https://twitter.com/atien_o" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
          <FaTwitter/>
          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="https://dev.to/atienoobwanda" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
          <BiLogoDevTo/>
          <small className="text-xs font-medium"></small>
        </a>

        <a href="https://wa.me/+254700851861/?text=Hi%20Atieno" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
          <FaWhatsapp/>
          <small className="text-xs font-medium"></small>
        </a>

        <a href="tel:+254700851861" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
          <FaPhone/>
          <small className="text-xs font-medium"></small>
        </a>

        <hr className={darkMode ? 'dark:border-gray-700/60' : ''} />
        {/* <hr className="dark:border-gray-700/60" /> */}
      {/* Theme control */}
      <div className={`flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 ${darkMode ? 'dark:text-gray-400 bg:grey-900' : ''}`} onClick={toggleDarkMode}>
        {darkMode ? <BsSun /> : <FaMoon />}
        <small className="text-xs font-medium"></small>
      </div>

      </nav>
    
    
    
  )
}

export default Nav