import React from 'react'
import Nav from './Layout/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Layout/Footer'
import GitHub from './Components/GitHub'
import Blogs from './Components/Blog'

const App = () => {
  return (
<>
<div className="relative bg-gray-50 dark:bg-slate-900 w-screen h-full md:w-full">

<Nav/>
<div className="ml-[18em] pt-[10em] md:ml-[120px]">
<Hero/>
<About/>
{/* <Skills/> */}
<Projects/>

<GitHub/>
<Blogs/>
<Footer/>
</div>
</div>
</>
  )
}

export default App