import React from 'react'
import {BiSolidDownload} from 'react-icons/bi'
import TypingAnimation from "../magicUi/typing"
// import resume from "../assets/MillicentAtieno.pdf";


const Hero = () => {
  return (
    <div className="flex flex-row mb-[6em] md:flex-col">
        <div className="w-1/2 md:w-full">
          <h1 className='text-4xl text-dark dark:text-white font-gotham leading-normal md:text-2xl md:w-full'>
          <TypingAnimation
                text="Hello, Nice to e-meet you!"
              />
            </h1>
          <h1 className='text-4xl	text-dark dark:text-white font-gotham leading-normal mb-2 md:text-2xl md:w-full sm:w-full'>
          My name   
            <span className="text-orange ml-2">Millicent A. Obwanda...</span>
              <br></br>
          </h1>
            {/* sm */}
            <div className="hidden md:flex mr-8 md:mt-8">
                      <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
                        className="rounded-full h-1/2 w-1/2 hover:border-[4px] border-orange"/>
                  </div>
            {/* text */}
              <h6 className='text-xl	text-dark dark:text-white font-gotham leading-normal mt-[1.5em] md:pr-2'>
              I am a client-centric software engineer dedicated to solving day-to-day challenges through technology. 
              My passion lies in elevating people and building communities. Explore to learn more about my work, skills, 
              and how we can collaborate to make a positive  impact.
              </h6>

          
          
          <div className="md:flex">
            <a 
              href='https://calendly.com/atienoobwanda/project-discussion-with-me'
              target="_blank"
              >
              <button 
                type="button" 
                className="text-orange font-gotham border-1 text-2xl rounded-full px-[4em] py-[1em] text-center mr-2 mt-[4em] bg-transparent border-[2px] border-orange hover:text-orange md:btn-small text-sm">
                  Let's Work Together
                </button>


            </a>
    {/* 
    
    <ShimmerButton className="rounded-full shadow-2xl pt-4 hover:bg-transparent border-[1px] border-orange hover:text-orange">
                <span className=" text-center text-sm font-medium leading-none tracking-tight text-orange dark:from-orange dark:to-slate-900/10 lg:text-lg ">
                Let's Work Together
                </span>
              </ShimmerButton>
    */}
      
      </div>
      


        </div>

        <div className="md:hidden p-4 w-1/2 pl-[15em]">
        <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
        className="rounded-full h-[24em] w-[24em] hover:border-[4px] border-orange md:h-[16em] md:w-[20em]"
        />

        </div>
    </div>
  )
}

export default Hero