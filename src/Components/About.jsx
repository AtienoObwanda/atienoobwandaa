import React from 'react'
import ReactPlayer from 'react-player'

const About = () => {
  return (
    <div className="mt-[6em] mb-[6em] ">
<div className=" ml-[-18em]">
<h1 className='text-6xl text-center text-dark dark:text-white font-sans leading-normal mb-6'>About Me</h1>

</div>
<div className="flex">
  <div className="w-1/2 p-[4em]">
  <ul className='text-xl text-left	text-dark dark:text-white font-sans leading-normal	mt-[1.5em] list-outside	list-disc	'>
    <li className='mb-6'>
    As a seasoned Information Technology professional based in Nairobi, Kenya, I bring over four years of hands-on experience encompassing software development, technical support, and DevOps engineering. My expertise spans a wide array of technologies, including Python, JavaScript frameworks, React, Django, PostgreSQL, and proficiency in cloud platforms such as AWS, GCP, and Azure.
    </li>

    <li className='mb-6'>
    Throughout my career, I've excelled in designing and implementing robust software solutions, consistently delivering high-quality code, and contributing to successful project outcomes. I've achieved a commendable 95% client satisfaction rate, demonstrating my ability to effectively troubleshoot and resolve complex technical issues.
    </li>

    <li className='mb-6'>
    In my DevOps role, I've demonstrated expertise in ensuring the reliability, availability, and performance of critical infrastructure and applications. Automation is at the core of my approach, allowing me to streamline processes, reduce manual workload, and enhance operational efficiency.
    </li>

    <li className='mb-6'>
    I'm deeply passionate about open-source principles and firmly believe in the transformative power of technology to effect positive societal change. I'm dedicated to documenting technologies and best practices, contributing to a culture of knowledge sharing and community growth.
    </li>

    <li className='mb-6'>
    Looking ahead, I'm eager to leverage my skills and experiences to drive innovation and make meaningful contributions to forward-thinking organizations. I'm particularly drawn to opportunities that align with my commitment to leveraging technology for positive impact.
    </li>
  </ul>


</div>


<div className="relative w-1/2 p-[6em]">
                      <ReactPlayer 
                      light={
                      <img 
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1698059615277/23fdcc34-1635-4f9c-8309-8a30b1fc8b6d.webp?auto=compress,format&format=webp"
                      alt='Poster' 
                      className="h-[240em] md:h-full sm:h-full object-cover rounded-lg w-full pt-2"

                      />}
                      url="https://www.youtube.com/watch?v=C_rjNGjckUc&ab_channel=LimoblazeVEVO"
                      playing  controls 
                      width='100%'
                      height='50em'
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload' // Disable download
                          }
                        }
                      }}
                      />

  </div>
</div>
    
    </div>
  )
}

export default About