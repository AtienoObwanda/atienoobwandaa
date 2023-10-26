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
      name:'Artspace',
      description:'Enter a freshly updated and thoughtfully furnished peaceful home  surrounded by ancient trees, stone walls, and open meadows.',
      duration:'120',
      link:'#',
      gitHub:'#',
      caseStudy:'#',
      poster:'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      gallery1:'#',
      gallery2:'#',
      gellery3:'#',
      gallery4: '#',
      video:'#',
      stack:[ 'React', 'Django']

    },

    {
      name: 'Project 2',
      description: 'Description of Project 2.',
      duration: '90',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-2',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Angular', 'Node.js']
    },
    {
      name: 'Project 3',
      description: 'Description of Project 3.',
      duration: '150',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-3',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Vue.js', 'Express.js']
    },
    {
      name: 'Project 4',
      description: 'Description of Project 4.',
      duration: '180',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-4',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['React', 'Node.js']
    },
    {
      name: 'Project 5',
      description: 'Description of Project 5.',
      duration: '120',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-5',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Angular', 'Django']
    },
    {
      name: 'Project 6',
      description: 'Description of Project 6.',
      duration: '100',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-6',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Vue.js', 'Express.js']
    },
    {
      name: 'Project 7',
      description: 'Description of Project 6.',
      duration: '100',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-6',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Vue.js', 'Express.js']
    },
    {
      name: 'Project 8',
      description: 'Description of Project 6.',
      duration: '100',
      link: '#',
      gitHub: '#',
      caseStudy: '#',
      poster: 'https://images.unsplash.com/photo-6',
      gallery1: '#',
      gallery2: '#',
      gallery3: '#',
      gallery4: '#',
      video: '#',
      stack: ['Vue.js', 'Express.js']
    }
  
    ]

  return (
    <div className="mt-[6em] mb-[6em] ">
    <div className="ml-[-18em]">
    <h1 className='text-6xl  text-center text-dark dark:text-white font-sans leading-normal mb-[1em]'>Notable Projects</h1>

    </div>
<div className="flex flex-wrap p-4 mr-4 ml-[-8em]">

    {/* Projects */}
    {Projects.map((Project, index) => (
    <Card className=" w-full max-w-[26rem] shadow-lg mr-6 rounded-lg m-5">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Project Poster"
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
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Live Link">
            <span className="w-[8em] flex gap-4 cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <TbWorldWww/> Live Link
            </span>
          </Tooltip>
          <Tooltip content=" GitHub">
            <span className="w-[6em] flex gap-4 cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
             <FaGithubSquare/> GitHub
            </span>
          </Tooltip>
          <Tooltip content="Case Study">
            <span className="w-[8.5em] flex gap-4 cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <TfiStatsUp/> Case Study
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        {/* <Button size="lg" fullWidth={true}>
          Case Study
        </Button> */}
      </CardFooter>
      </Card>
    ))}


    
   

  
</div>
 

</div>
  )
}

export default Projects