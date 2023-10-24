import React from 'react'

const Hero = () => {
  return (
    <div className="flex mb-[6em] ">
        <div className=" w-1/2">
       <h1 className='text-5xl text-dark dark:text-white font-sans leading-normal'>Hello,</h1>
       
       <h1 className='text-5xl	text-dark dark:text-white font-sans leading-normal	'>
        I am 
        <span className='text-orange font-serif font-bold	'> Millicent A. Obwanda, </span> <br></br>
        Software Developer || DevOps Engineer
       </h1>

       <h6 className='text-xl	text-dark dark:text-white font-sans leading-normal	mt-[1.5em]'>
       I'm passionate about solving day-to-day challenges through technology at the same time elevating people, and building community!
       </h6>



        </div>

        <div className="p-4 w-1/2 pl-[15em]">
        <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1671113695/personal/me_t1hopq.jpg" alt="Millicent A Obwanda" 
        class="rounded-full h-[24em] w-[24em] hover:border-[4px] border-orange"/>

        </div>
    </div>
  )
}

export default Hero