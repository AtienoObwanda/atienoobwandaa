import React from 'react'
import GitHubCalendar from "react-github-calendar";


const GitHub = () => {
  return (
    <div className="mt-[6em] mb-[6em] ">
    <div className="ml-[-18em]">
    <h1 className='text-6xl  text-center text-dark dark:text-white font-sans leading-normal  mb-8
    '>GitHub Activity</h1>

    </div>
{/* Skill logos slider */}
<div className="relative m-auto overflow-hidden mr-[10em] ml-[10em] text-dark dark:text-white">
      {/* GiHub */}
      <GitHubCalendar
        username="AtienoObwanda"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        style={{
            '--color-calendar-graph-day-L1-bg': 'green',
          }}
      />

    </div>
    </div>

  )
}

export default GitHub