import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

import {AiFillClockCircle} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'
import { FaGithubSquare } from 'react-icons/fa'; // For Font Awesome Icons
import {TfiStatsUp} from 'react-icons/tfi'




const Projects = () => {

  const Projects = [
    {
      name:'Django Gallery Web Application',
      description:'ArtSpace Is a gallery web application created using Django.The web application has a collection of images from different categories and locations... As the site admin, you can login, to your account and upload images, categorize them differently, also add their location etc.',
      duration:'120',
      link:'#',
      gitHub:'https://github.com/AtienoObwanda/artSpace',
      caseStudy:'#',
      poster:'https://res.cloudinary.com/dyiuol5sx/image/upload/v1655264803/projectPics/hero_ryldwi.png',
      gallery1:'#',
      gallery2:'#',
      gellery3:'#',
      gallery4: '#',
      video:'#',
      stack:[ 'React', 'Django']

    },

    {
      name: 'Mich(Award)',
      description: "Mich(Award) is a web application that allows users to upload their projects, and have other users rate them. They also get to rate other users projects. All they have to do is sign up, and login to their accounts. This project has been created using Django and it's inspiration has been drawn from the Awwards.com offical website",
      duration: '140',
      link: '#',
      gitHub: 'https://github.com/AtienoObwanda/Mich.',
      caseStudy: '#',
      poster: 'https://res.cloudinary.com/dyiuol5sx/image/upload/v1655269982/projectPics/project_lw6zb2.png',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Angular', 'Node.js']
    },
    {
      name: 'Instagram Clone',
      description: 'Instagram clone using Django framework is a simple page where users could interact with his photos, and other users.',
      duration: '150',
      link: '#',
      gitHub: 'https://github.com/AtienoObwanda/gramClone',
      caseStudy: '#',
      poster: 'https://res.cloudinary.com/dyiuol5sx/image/upload/v1655264774/projectPics/landing_gvkioh.png',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Vue.js', 'Express.js']
    },
    
    
    ]

  return (
    <div className="mt-[6em] mb-[6em] ">
    <div className="ml-[-18em]  sm:ml-[-0.1em]">
    <h1 className='text-6xl  text-center text-dark dark:text-white font-newyork leading-normal mb-[1em] sm:text-4xl'>Highlighted Projects</h1>

    </div>
<div className="flex flex-wrap p-4  ml-[-2em]">

    {/* Projects */}
    {Projects.map((Project, index) => (
    <Card className=" w-full w-1/4 shadow-lg rounded-lg m-5 font-gotham md:w-full">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={Project.poster}
          alt="Project Poster"
          className='h-[15em]'
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody className='p-[1em]'>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
           {Project.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            {/* time */}
            <AiFillClockCircle/>
           {Project.duration} Hrs
          </Typography>
        </div>
        <Typography color="gray">
          {Project.description}
        </Typography>
        {/* Tools and technologies */}
          <br></br>

        <div className="group mt-2 inline-flex flex-wrap items-center gap-3">
          
          
          <Tooltip content=" GitHub">
           <a href={Project.gitHub}>
           <span className="w-[7em] flex items-center text-center pl-6 gap-4 cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
             GITHUB 
            </span>
           </a>
          </Tooltip>
    
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      </CardFooter>
      </Card>
    ))}


    
   

  
</div>
 

</div>
  )
}

export default Projects