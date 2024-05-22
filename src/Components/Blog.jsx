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




const Blogs = () => {

  const Blogs = [
    {
      name:'Why Software Engineering?',
      description:"From Curiosity to Creation: My Journey into the World of Software Engineering",
      duration:'Software Engineering',
      link:'#',
      gitHub:'https://dev.to/atienoobwanda/from-curiosity-to-creation-my-journey-into-the-world-of-software-development-2gk6',
      caseStudy:'#',
      poster:'https://res.cloudinary.com/dyiuol5sx/image/upload/v1716403129/personal/Blogs/dev_r4idvb.png',
      gallery1:'#',
      gallery2:'#',
      gellery3:'#',
      gallery4: '#',
      video:'#',
      stack:[ 'Coding']

    },


    {
        name:'A Step-by-Step Guide to Setting Up a PostgreSQL Database on Amazon AWS',
        description:"Are you looking to set up a PostgreSQL database on Amazon AWS? Follow these simple steps to get started...",
        duration:'Database',
        link:'#',
        gitHub:'https://dev.to/atienoobwanda/a-step-by-step-guide-to-setting-up-a-postgresql-database-on-amazon-aws-2dfc',
        caseStudy:'#',
        poster:'https://res.cloudinary.com/dyiuol5sx/image/upload/v1716403131/personal/Blogs/Aws_txypfj.png',
        gallery1:'#',
        gallery2:'#',
        gellery3:'#',
        gallery4: '#',
        video:'#',
      stack:[ 'PostgreSQL', 'AWS']
  
      },
    {
      name: 'How To Deploy A python-flask app to Heroku. Avoid the [H10-Error] !',
      description:"Deploying a flask app to Heroku can somehow become a hustle! Even when you have done everything the right way,the famous H10 Heroku error can just pop up out of nowhere! Here is a way that makes deployment less of a hustle and more of a win!...",
      duration: 'Deployment',
      link: '#',
      gitHub: 'https://dev.to/atienoobwanda/how-to-deploy-a-python-flask-app-to-heroku-avoid-the-h10-error--2pn3',
      caseStudy: '#',
      poster: 'https://res.cloudinary.com/dyiuol5sx/image/upload/v1716403128/personal/Blogs/flask-heroku_cbbi8e.png',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Python', 'Heroku']
    },
    
    
    ]

  return (
    <div className="mt-[6em] mb-[6em] ">
    <div className="ml-[-18em]  sm:ml-[-0.1em]">
    <h1 className='text-6xl  text-center text-dark dark:text-white font-newyork leading-normal mb-[1em] sm:text-4xl'>Latest Blog Posts</h1>

    </div>
<div className="flex flex-wrap p-4  ml-[-2em]">

    {/* Blogs */}
    {Blogs.map((Blog, index) => (
    <Card className=" w-full w-1/4 shadow-lg rounded-lg m-5 font-gotham md:w-full">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={Blog.poster}
          alt="Project Poster"
          className='h-[15em]'
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody className='p-[1em]'>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
           {Blog.name}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            {/* time */}
            <AiFillClockCircle/>
           {Blog.duration}
          </Typography>
        </div>
        <Typography color="gray">
          {Blog.description}
        </Typography>
        {/* Tools and technologies */}
          <br></br>

        <div className="group mt-2 inline-flex flex-wrap items-center gap-3">
          
          
          <Tooltip content=" GitHub">
           <a href={Blog.gitHub}>
           <span className="w-[8em] flex items-center text-center pl-6 gap-4 cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
             Read More 
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

export default Blogs