import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter,FaWhatsapp,FaInstagram,FaPhone,FaMoon} from 'react-icons/fa'
// BiLogoDevTo
import {BsSun} from 'react-icons/bs'

const Nav = () => {
  return (
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <a href="#profile" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
          <FaGithub/>
          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="#analytics" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
        <FaLinkedin/>

          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="#settings" className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800">
          <FaTwitter/>
          <small className="text-center text-xs font-medium">  </small>
        </a>

        <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400">
          <FaInstagram/>
          <small className="text-xs font-medium"></small>
        </a>

        <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400">
          <FaWhatsapp/>
          <small className="text-xs font-medium"></small>
        </a>

        <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400">
          <FaPhone/>
          <small className="text-xs font-medium"></small>
        </a>

        <hr className="dark:border-gray-700/60" />
        {/* Theme control  */}

        <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400">
          <FaMoon/>
          <small className="text-xs font-medium"></small>
        </a>
        <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400">
          <BsSun/>
          <small className="text-xs font-medium"></small>
        </a>
      </nav>
    
    
    
  )
}

export default Nav