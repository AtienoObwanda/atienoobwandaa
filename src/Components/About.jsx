import React from 'react'
import ReactPlayer from 'react-player'
import IconCloud from '../magicUi/IconCloud'

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];
 
const About = () => {
  return (
    <div className="mt-[6em] mb-[6em] ">
<div className=" ml-[-18em] sm:ml-[-6em]">
<h1 className='text-6xl text-center text-dark dark:text-white font-newyork leading-normal mb-2 sm:text-4xl'>Abit About Me</h1>

</div>

<div className="flex flex-row md:flex-col p-6 md:p-12 h-[70em] md:h-auto">
      <div className="w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 md:w-full">
        <img
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1716398969/personal/ME_p2v28f.jpg"
          alt="Millicent Obwanda"
          className="w-3/4 h-auto object-cover shadow-lg md:w-full"
        />
      </div>

      <div className="w-1/2 text-left md:text-left text-xl	text-dark dark:text-white font-gotham leading-normal	mt-[1.5em] md:w-full	sm:text-sm">
        <p className="mb-4">
        I'm Millicent Obwanda, a software engineer with a strong focus on customer satisfaction and community building. With expertise in Python, JavaScript frameworks, cloud platforms, and automation tools, I thrive on creating robust software solutions.
        </p>
        <p className="mb-4">
         Throughout my career, I've consistently delivered high-quality code and contributed to successful project outcomes. My commitment to providing exceptional technical support has earned me a 95% client satisfaction rate, reflecting my ability to effectively troubleshoot and resolve complex issues. 
         </p>
        <p className="">
          I am deeply passionate about open-source principles and believe in technology's power to drive positive societal change. By documenting technologies and best practices, I aim to foster a culture of knowledge sharing and community growth.
          </p>

          {/* Skills */}
<div className="mt-12">
<h1 className='mb-6 text-3xl text-left text-dark dark:text-white font-newyork leading-bold mb-2 sm:text-4xl'>Technical Proficiencies: </h1>

{/* Cloud */}
<div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>


</div>
      </div>
    </div>

    
    </div>
  )
}

export default About