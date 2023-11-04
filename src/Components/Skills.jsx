import React from 'react'
// SiPython FaReact BiLogoPostgresql DiDjango SiMysql BiLogoAws DiMongodb
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TbBrandNextjs } from "react-icons/tb"
import { SiAmazonaws, SiGraphql, SiTypescript, SiJinja } from "react-icons/si"
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
} from "react-icons/di";


// Tools
import {
  SiVisualstudiocode,
  SiPostman,
  SiAmazons3,
  SiAmazondynamodb,
  SiAwslambda,
  SiAmazonapigateway,
  SiTailwindcss,
  SiAmazoncloudwatch,
  SiGithub,
} from "react-icons/si";





const Skills = () => {
  const STACK = [
  // {icon:< />,
  // text:''
  // },
  ]

  const TOOLS = [
    <SiVisualstudiocode className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={1}/>,
    <SiPostman className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={2}/>,
    <SiAmazons3 className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={3}/>,
    <SiAmazondynamodb className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={4}/>,
    // <SiAwslambda className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={5}/>,
    // <SiAmazonapigateway className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={6}/>,
    <SiTailwindcss className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={7}/>,
    // <SiAmazoncloudwatch className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={8}/>,
    <SiGithub className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0 hover:text-orange hover:fill-orange" key={9}/>
    
  ]
  
  const LOGOS = [
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895711/TechStacks/djrf_d2uezf.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={1} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895807/TechStacks/react_sk7w0o.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={2} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895802/TechStacks/postgresql_golbq8.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={3} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895755/TechStacks/angular_ist2oi.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={4} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895764/TechStacks/django_tqjf3x.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={5} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895771/TechStacks/flask_egljkw.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={6} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895751/TechStacks/amazon-aws_yfbjiz.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={13} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895797/TechStacks/nodejs_wvgwlf.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={14} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895788/TechStacks/mysql_evdivb.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={15} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895784/TechStacks/mongodb_mgmx9m.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={16} />,
    <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1658895779/TechStacks/git_mzzzcq.png" alt="" className="w-[200px] h-[160px] p-[2em] grayscale transition duration-300 hover:grayscale-0" key={17} />    
    ];


  // React Slick Settings:
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };





// Rendering Content:
  return (
    <div className="mt-[6em] mb-[6em] ">
      <div className="ml-[-18em] md:ml-[2em] sm:ml-[0.1em]">
      <h1 className='text-6xl  text-center text-dark dark:text-white font-newyork leading-normal  mb-8 sm:text-4xl'>Technologies & Tools</h1>

      </div>
{/* Skill logos slider */}
 <div className="sm:hidden relative m-auto overflow-hidden mr-[12em] md:mt-[1em] md:mr-[0.5em] sm:mt-[-2em]">
        <Slider {...settings}>
          {LOGOS.map((logo, index) => (
            <div className="slide flex items-center justify-center" key={index}>
              {logo}
            </div>
          ))}
        </Slider>
      </div>

{/* Skill logos slider */}
 <div className="sm:hidden relative m-auto overflow-hidden mr-[12em] md:mt-[0.5em] md:mr-[0.5em]">
        <Slider {...settings}>
          {TOOLS.map((logo, index) => (
            <div className="slide flex items-center justify-center" key={index}>
              {logo}
            </div>
          ))}
        </Slider>
      </div>

{/* small */}
<div className="hidden sm:flex">
<div className="relative m-auto overflow-hidden mt-[1em]">
        <Slider {...settings}>
          {LOGOS.map((logo, index) => (
            <div className="slide flex items-center justify-center" key={index}>
              {logo}
            </div>
          ))}
        </Slider>
      </div>

{/* Skill logos slider */}
 <div className="relative m-auto overflow-hidden">
        <Slider {...settings}>
          {TOOLS.map((logo, index) => (
            <div className="slide flex items-center justify-center" key={index}>
              {logo}
            </div>
          ))}
        </Slider>
      </div>
</div>
       

</div>
  )
}

export default Skills