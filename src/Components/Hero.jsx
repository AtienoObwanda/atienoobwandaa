import React from 'react'
import {BiSolidDownload} from 'react-icons/bi'
// import resume from "../assets/MillicentAtieno.pdf";


const Hero = () => {
  return (
    <div className="flex flex-row mb-[6em] sm:flex-col">
        <div className="w-1/2 sm:w-full">
       <h1 className='text-4xl text-dark dark:text-white font-gotham leading-normal md:text-2xl md:w-full'>Hi 🤙🏽,</h1>
        
       
       <h1 className='text-4xl	text-dark dark:text-white font-gotham leading-normal mb-2 md:text-2xl md:w-full sm:w-full'>
        I'm 
        <span className="text-orange font-newyork"> Millicent Obwanda!</span> <br></br>

        {/*         <span className='font-newyork'>a Software Developer</span> */}

       </h1>
{/* sm */}
<div className="hidden sm:flex mr-8">
          <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
            className="rounded-full h-[20em] w-[20em] hover:border-[4px] border-orange"/>
       </div>

       <h6 className='text-xl	text-dark dark:text-white font-gotham leading-normal	mt-[1.5em]'>
       I am a customer-centric software engineer dedicated to solving day-to-day challenges through technology. 
       My passion lies in elevating people and building communities. Explore my site to learn more about my work, skills, and how we can collaborate to make a positive impact.
       </h6>

       
       
      <div className="md:flex">
        <a 
        href='https://calendly.com/atienoobwanda/project-discussion-with-me'
        target="_blank"
        >
  <button 
       type="button" 
       className="text-white font-gotham bg-orange border-1 text-2xl rounded-full px-[8em] py-[2em] text-center mr-2 mt-[4em] hover:bg-transparent hover:border-[2px] border-orange hover:text-orange md:btn-small text-sm">
        Let's Work Together
      </button>

        </a>
    
      {/* <a
      href='../src/assets/resume/MillicentAtieno.pdf'
      download='MillicentObwanda.pdf'
      target="_blank"
      > */}
        {/* <button
        type="button"
        className="ml-[2em] font-gotham text-orange bg-transparent border-orange border-[2px]  text-2xl rounded-full px-[0.8em] py-[0.8em] text-center mt-[4em] hover:bg-orange hover:border-[2px] border-orange hover:text-white w-[8em] md:btn-small text-sm"
        >
          Resume <BiSolidDownload className='mt-[-1em]'/>
        </button> */}
      {/* </a> */}
      </div>
      


        </div>

        <div className="sm:hidden p-4 w-1/2 pl-[15em]">
        <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
        className="rounded-full h-[24em] w-[24em] hover:border-[4px] border-orange md:h-[16em] md:w-[20em]"/>

        </div>
    </div>
  )
}

export default Hero