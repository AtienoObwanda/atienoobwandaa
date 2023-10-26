import React from 'react'
import {BiSolidDownload} from 'react-icons/bi'
// import resume from "../assets/MillicentAtieno.pdf";


const Hero = () => {
  return (
    <div className="flex mb-[6em] ">
        <div className=" w-1/2">
       <h1 className='text-5xl text-dark dark:text-white font-sans leading-normal'>Hello,</h1>
       {/*  🤙🏽 */}
       
       <h1 className='text-5xl	text-dark dark:text-white font-sans leading-normal	'>
        I am 
        <span className='text-orange font-serif font-bold	'> Millicent A. Obwanda, </span> <br></br>
        Software Developer || DevOps Engineer
       </h1>

       <h6 className='text-xl	text-dark dark:text-white font-sans leading-normal	mt-[1.5em]'>
       I'm passionate about solving day-to-day challenges through technology at the same time elevating people, and building community!
       </h6>

      <button 
       type="button" 
       className="text-white bg-orange border-1 text-2xl rounded-full px-[0.8em] py-[0.8em] text-center mr-2 mt-[4em] hover:bg-transparent hover:border-[2px] border-orange hover:text-orange">
        Let's Work Together
      </button>

      <a
      href='../src/assets/resume/MillicentAtieno.pdf'
      download='MillicentObwanda.pdf'
      target="_blank"
      >
        <button
        type="button"
        className="ml-[2em] text-orange bg-transparent border-orange border-[2px]  text-2xl rounded-full px-[0.8em] py-[0.8em] text-center mt-[4em] hover:bg-orange hover:border-[2px] border-orange hover:text-white w-[8em]"
        >
          Resume <BiSolidDownload className='mt-[-1em]'/>
        </button>
      </a>
      


        </div>

        <div className="p-4 w-1/2 pl-[15em]">
        <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
        className="rounded-full h-[24em] w-[24em] hover:border-[4px] border-orange"/>

        </div>
    </div>
  )
}

export default Hero